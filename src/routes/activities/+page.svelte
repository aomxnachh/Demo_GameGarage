<script lang="ts">
  interface Activity {
    id: string;
    title: string;
    description: string;
    date: string;
    type: 'upcoming' | 'post';
    image: string;
  }
  
  // Sample data for activities
  const activities: Activity[] = Array.from({ length: 6 }, (_, i) => ({
    id: `activity-${i+1}`,
    title: i === 0 ? "Pixel Art Workshop" : i === 1 ? "Game Jam 2025" : i === 2 ? "Unity Basics" : 
           i === 3 ? "Character Design" : i === 4 ? "VFX Workshop" : "Indie Game Talk",
    description: "Learn how to create stunning pixel art for your games. This workshop covers character design, environments, and animation basics.",
    date: "01/09/2025",
    type: i === 0 ? 'upcoming' : 'post',
    image: "/placeholder.jpg"
  }));

  // Filter options
  let selectedCategory: string = '';
  let selectedDate: string = '';
  
  // Search input
  let searchQuery: string = '';
  
  // Categories
  const categories = ['Game Development', 'Art', 'Design', 'Programming', 'All'];
</script>

<svelte:head>
  <title>Activities | GameGarage</title>
</svelte:head>

<div class="animate-fade-in max-w-6xl mx-auto">
  <h1 class="text-2xl md:text-3xl font-['Jersey_10'] text-center mb-6 text-gamegarage-yellow leading-normal">Activities</h1>
  
  <p class="text-center text-gray-300 max-w-2xl mx-auto mb-8 font-['Jersey_10'] text-xl">
    Join our game development activities, workshops, and events to level up your skills
    and connect with other developers in the GameGarage community!
  </p>
  
  <!-- Search and Filters -->
  <div class="mb-8 flex flex-col md:flex-row gap-4">
    <div class="relative flex-grow">
      <input 
        type="text" 
        placeholder="Search Activities..." 
        bind:value={searchQuery}
        class="w-full bg-gamegarage-black pixel-border py-2 pl-10 pr-4 text-white focus:outline-none focus:border-gamegarage-yellow font-['Jersey_10'] text-lg"
      />
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    
    <div class="flex space-x-4">
      <div class="relative">
        <select 
          bind:value={selectedCategory}
          class="appearance-none bg-gamegarage-black pixel-border py-2 pl-4 pr-10 text-white focus:outline-none focus:border-gamegarage-yellow font-['Jersey_10'] text-lg"
        >
          <option value="">Category</option>
          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div class="relative">
        <select 
          bind:value={selectedDate}
          class="appearance-none bg-gamegarage-black pixel-border py-2 pl-4 pr-10 text-white focus:outline-none focus:border-gamegarage-yellow font-['Jersey_10'] text-lg"
        >
          <option value="">Date</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
  
  <!-- Activities Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {#each activities as activity, i}
      <a 
        href={`/activities/${activity.id}`}
        class="game-card animate-slide-in transition-all duration-300 block relative group"
        style="animation-delay: {i * 0.1}s"
      >
        <div class="absolute inset-0 bg-gamegarage-yellow opacity-0 group-hover:opacity-10 transition-opacity z-0"></div>
        <div class="relative aspect-[4/3] overflow-hidden">
          <div class="absolute inset-0 bg-gamegarage-gray flex items-center justify-center">
            <span class="text-white font-['Jersey_10'] text-xs">Game Activity Image</span>
          </div>
          
          {#if activity.type === 'upcoming'}
            <div class="absolute top-0 left-0 bg-gamegarage-yellow text-gamegarage-black text-xs font-['Jersey_10'] py-1 px-2 pixel-border border-0 border-r-2 border-b-2 border-black z-10">
              UPCOMING
            </div>
          {:else}
            <div class="absolute top-0 left-0 bg-gamegarage-orange text-gamegarage-black text-xs font-['Jersey_10'] py-1 px-2 pixel-border border-0 border-r-2 border-b-2 border-black z-10">
              POST
            </div>
          {/if}
        </div>
        
        <div class="p-4">
          <h2 class="font-['Jersey_10'] text-sm mb-3 text-gamegarage-yellow leading-relaxed">{activity.title}</h2>
          <p class="font-['Jersey_10'] text-base text-gray-300 mb-3 line-clamp-3">{activity.description}</p>
          <div class="flex justify-between items-center text-xs mt-auto">
            <div class="flex items-center text-gamegarage-light-gray">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="font-['Jersey_10'] text-base">{activity.date}</span>
            </div>
            <div class="text-gamegarage-yellow font-['Jersey_10'] text-[10px]">
              ACTIVITIES
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
  
  <!-- Pagination -->
  <div class="mt-10 flex justify-center">
    <div class="flex space-x-3">
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors group" aria-label="Previous page">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-gamegarage-yellow transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors font-['Jersey_10'] text-base hover:text-gamegarage-yellow">1</button>
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-yellow text-gamegarage-black font-['Jersey_10'] text-base">2</button>
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors font-['Jersey_10'] text-base hover:text-gamegarage-yellow">3</button>
      <span class="w-10 h-10 flex items-center justify-center text-gamegarage-light-gray font-['Jersey_10'] text-base">...</span>
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors font-['Jersey_10'] text-base hover:text-gamegarage-yellow">10</button>
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors group" aria-label="Next page">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-gamegarage-yellow transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>
