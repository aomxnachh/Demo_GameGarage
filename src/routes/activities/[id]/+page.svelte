<script lang="ts">
  import { page } from '$app/stores';
  
  const activityId = $page.params.id;
  
  // Mock activity data
  const activity = {
    id: activityId,
    title: "Game Jam Weekend",
    description: "Join us for an exciting weekend of game development! Create a game based on the theme revealed at the start of the event.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h3>Event Schedule:</h3>
      <ul>
        <li>Friday: Theme announcement and team formation</li>
        <li>Saturday: Full day of development</li>
        <li>Sunday: Finalize projects and presentations</li>
      </ul>
    `,
    date: "20/09/2025",
    location: "Online",
    organizer: "GameGarage Team",
    type: "upcoming",
    tags: ["Game Jam", "Development", "Contest"],
    image: "/placeholder.jpg"
  };
</script>

<svelte:head>
  <title>{activity.title} | Activities | GameGarage</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <!-- Breadcrumbs -->
  <div class="flex items-center text-sm mb-6 text-gray-400">
    <a href="/" class="hover:text-gamegarage-yellow">Home</a>
    <span class="mx-2">/</span>
    <a href="/activities" class="hover:text-gamegarage-yellow">Activities</a>
    <span class="mx-2">/</span>
    <span class="text-white">{activity.title}</span>
  </div>
  
  <!-- Activity Header -->
  <div class="relative rounded-lg overflow-hidden mb-8">
    <div class="h-64 bg-gray-600 flex items-center justify-center">
      <span class="text-white font-pixel text-3xl">for content</span>
    </div>
    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gamegarage-black to-transparent p-6">
      <div class="inline-block mb-2">
        {#if activity.type === 'upcoming'}
          <span class="bg-green-500 text-xs font-medium py-1 px-2 rounded">UPCOMING</span>
        {:else}
          <span class="bg-red-500 text-xs font-medium py-1 px-2 rounded">POST</span>
        {/if}
      </div>
      <h1 class="text-3xl font-pixel mb-2">{activity.title}</h1>
      <p class="text-gray-300">{activity.description}</p>
    </div>
  </div>
  
  <!-- Activity Details -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <!-- Activity Content -->
    <div class="md:col-span-3">
      <div class="bg-gamegarage-gray rounded-lg p-6 mb-6 animate-fade-in">
        <div class="prose prose-invert max-w-none">
          {@html activity.content}
        </div>
      </div>
      
      <!-- Comments Section -->
      <div class="bg-gamegarage-gray rounded-lg p-6 animate-fade-in">
        <h3 class="font-pixel text-xl mb-4">Comments</h3>
        
        <!-- Comment Form -->
        <div class="mb-6">
          <textarea
            class="w-full bg-gamegarage-light-gray border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gamegarage-yellow"
            rows="3"
            placeholder="Leave a comment..."
          ></textarea>
          <div class="mt-2 flex justify-end">
            <button class="btn btn-primary font-medium">
              Post Comment
            </button>
          </div>
        </div>
        
        <!-- Sample Comment -->
        <div class="border-t border-gray-600 pt-4">
          <div class="flex space-x-3">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 rounded-full bg-gamegarage-light-gray flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div class="flex-grow">
              <div class="flex items-center justify-between">
                <h4 class="font-medium">User123</h4>
                <span class="text-xs text-gray-400">2 hours ago</span>
              </div>
              <p class="text-sm text-gray-300 mt-1">
                This looks like a great event! I'm looking forward to participating and meeting other developers.
              </p>
              <div class="mt-2 flex space-x-4 text-xs text-gray-400">
                <button class="flex items-center hover:text-gamegarage-yellow">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  Like
                </button>
                <button class="flex items-center hover:text-gamegarage-yellow">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Activity Sidebar -->
    <div class="md:col-span-1">
      <div class="bg-gamegarage-gray rounded-lg p-4 mb-4 animate-fade-in">
        <h3 class="font-pixel text-lg mb-3">Details</h3>
        
        <div class="space-y-3 text-sm">
          <div class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gamegarage-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <div class="font-medium">Date</div>
              <div class="text-gray-400">{activity.date}</div>
            </div>
          </div>
          
          <div class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gamegarage-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div class="font-medium">Location</div>
              <div class="text-gray-400">{activity.location}</div>
            </div>
          </div>
          
          <div class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gamegarage-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div>
              <div class="font-medium">Organizer</div>
              <div class="text-gray-400">{activity.organizer}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tags -->
      <div class="bg-gamegarage-gray rounded-lg p-4 animate-fade-in">
        <h3 class="font-pixel text-lg mb-3">Tags</h3>
        <div class="flex flex-wrap gap-2">
          {#each activity.tags as tag}
            <span class="bg-gamegarage-light-gray px-2 py-1 rounded-md text-xs hover:bg-gamegarage-yellow hover:text-gamegarage-black transition-colors">
              {tag}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
