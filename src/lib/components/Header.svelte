<script lang="ts">
  import { page } from '$app/stores';
  
  let notifications: number = 3;
  let showNotifications = false;
  
  // Sample notification data
  const notificationItems = [
    { id: 1, title: "New Game Added", content: "A new game 'Pixel Dungeon' has been added to your favorites", time: "Just now", read: false },
    { id: 2, title: "Community Event", content: "Join our upcoming Pixel Art Game Jam this weekend!", time: "2 hours ago", read: false },
    { id: 3, title: "Friend Request", content: "PixelArtist42 wants to connect with you", time: "Yesterday", read: true },
  ];
  
  // Toggle notification panel
  function toggleNotifications() {
    showNotifications = !showNotifications;
  }
  
  // User level data
  const userLevel = {
    level: 12,
    currentXP: 750,
    nextLevelXP: 1000
  };
  
  // Navigation items with dynamic active state
  $: navItems = [
    { name: 'Home', path: '/', active: $page.url.pathname === '/' },
    { name: 'Activities', path: '/activities', active: $page.url.pathname.startsWith('/activities') },
    { name: 'Projects', path: '/projects', active: $page.url.pathname.startsWith('/projects') },
    { name: 'Community', path: '/community', active: $page.url.pathname.startsWith('/community') }
  ];
</script>

<header class="bg-gamegarage-dark border-b-3 border-gamegarage-yellow sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center py-3">
      <!-- Logo -->
      <a href="/" class="text-2xl md:text-3xl font-['Jersey_10'] text-gamegarage-yellow hover:text-white transition-colors duration-300 animate-pixel-flicker">
        Game<span class="text-white">Garage</span>
      </a>
      
      <!-- Navigation -->
      <nav class="hidden md:flex space-x-6 lg:space-x-10 py-2">
        {#each navItems as item}
          <a 
            href={item.path} 
            class="nav-link"
            class:active={item.active}
          >
            {item.name}
          </a>
        {/each}
      </nav>
      
      <!-- User section -->
      <div class="flex items-center space-x-4">
        <!-- Level indicator -->
        <div class="hidden md:flex items-center space-x-2">
          <div class="relative h-4 w-28 bg-gamegarage-dark pixel-border overflow-hidden">
            <div class="absolute top-0 left-0 h-full bg-gamegarage-yellow" style="width: {(userLevel.currentXP / userLevel.nextLevelXP) * 100}%;"></div>
          </div>
          <span class="text-gamegarage-yellow font-['Jersey_10'] text-base">LV.{userLevel.level}</span>
        </div>
        
        <!-- Notification bell -->
        <div class="relative">
          <button 
            class="relative focus:outline-none" 
            aria-label="Notifications"
            on:click={toggleNotifications}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {#if notifications > 0}
              <span class="absolute -top-1 -right-1 bg-gamegarage-orange text-gamegarage-black text-xs w-5 h-5 flex items-center justify-center pixel-border border-1">
                {notifications}
              </span>
            {/if}
          </button>
          
          <!-- Notification Popup -->
          {#if showNotifications}
            <div class="absolute right-0 mt-2 w-80 bg-gamegarage-black pixel-border border-gamegarage-yellow z-50 animate-fade-in">
              <div class="px-4 py-2 border-b border-gamegarage-border flex justify-between items-center">
                <h3 class="font-['Jersey_10'] text-base text-gamegarage-yellow">Notifications</h3>
                <span class="text-sm font-['Jersey_10'] text-gamegarage-light-gray">Mark all as read</span>
              </div>
              <div class="max-h-96 overflow-y-auto">
                {#each notificationItems as notification}
                  <div class="p-3 border-b border-gamegarage-border hover:bg-gamegarage-dark cursor-pointer transition-colors" class:bg-gamegarage-dark={!notification.read}>
                    <div class="flex justify-between">
                      <h4 class="font-['Jersey_10'] text-base text-gamegarage-yellow">{notification.title}</h4>
                      <span class="text-xs text-gamegarage-light-gray">{notification.time}</span>
                    </div>
                    <p class="text-sm mt-1 font-['Jersey_10']">{notification.content}</p>
                  </div>
                {/each}
              </div>
              <div class="p-2 text-center border-t border-gamegarage-border">
                <a href="/notifications" class="text-sm text-gamegarage-yellow hover:underline font-['Jersey_10']">View All Notifications</a>
              </div>
            </div>
          {/if}
        </div>
        
        <!-- User profile -->
        <a href="/profile" class="flex items-center space-x-3 group">
          <span class="text-base hidden md:inline-block font-['Jersey_10']">Demo User</span>
          <div class="w-12 h-12 bg-gamegarage-gray pixel-border border-2 overflow-hidden transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-gamegarage-light-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </a>
        
        <!-- Mobile menu button - only shown on small screens -->
        <button class="md:hidden" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
