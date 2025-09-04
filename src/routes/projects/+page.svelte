<script lang="ts">
  interface Project {
    id: string;
    title: string;
    description: string;
    author: string;
    date: string;
    tags: string[];
    image: string;
  }
  
  // Sample data for projects
  const projects: Project[] = Array.from({ length: 9 }, (_, i) => ({
    id: `project-${i+1}`,
    title: i === 0 ? "Pixel Dungeon" : i === 1 ? "Space Explorer" : i === 2 ? "Monster Tamer" : 
           i === 3 ? "Castle Defense" : i === 4 ? "Robo Run" : i === 5 ? "Farm Simulator" :
           i === 6 ? "Treasure Hunt" : i === 7 ? "Ninja Warrior" : "Dragon Quest",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    author: "Demo User",
    date: "01/09/2025",
    tags: ["adventure", "indie"],
    image: "/placeholder.jpg"
  }));

  // Filter options
  let selectedCategory: string = '';
  
  // Search input
  let searchQuery: string = '';
  
  // Categories
  const categories = ['Adventure', 'RPG', 'Shooter', 'Puzzle', 'Platformer', 'All'];
</script>

<svelte:head>
  <title>Projects | GameGarage</title>
</svelte:head>

<div class="animate-fade-in">
  <h1 class="text-2xl md:text-3xl font-['Jersey_10'] text-center mb-6 text-gamegarage-yellow leading-normal">Projects</h1>
  
  <p class="text-center text-gray-300 max-w-2xl mx-auto mb-8 font-['Jersey_10'] text-xl">
    lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum corrupti labore dicta maiores, id deleniti error at nemo ipsum quod asperiores ex dolorum eveniet illo! Culpa blanditiis numquam amet.
  </p>
  
  <!-- Search and Filters -->
  <div class="mb-8 flex flex-col md:flex-row gap-4">
    <div class="relative flex-grow">
      <input 
        type="text" 
        placeholder="Search Projects..." 
        bind:value={searchQuery}
        class="w-full bg-gamegarage-black pixel-border py-2 pl-10 pr-4 text-white focus:outline-none focus:border-gamegarage-yellow font-['Jersey_10'] text-lg"
      />
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    
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
  </div>
  
  <!-- Projects Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {#each projects as project, i}
      <a 
        href={`/projects/${project.id}`}
        class="block animate-slide-in relative group"
        style="animation-delay: {i * 0.1}s"
      >
        <div class="game-card hover:border-gamegarage-orange transition-all duration-300 relative">
          <div class="absolute inset-0 bg-gamegarage-yellow opacity-0 group-hover:opacity-10 transition-opacity z-0"></div>
          
          <div class="aspect-[4/3] bg-gamegarage-gray flex items-center justify-center overflow-hidden relative">
            <span class="text-white font-['Jersey_10'] text-xs">Game Screenshot</span>
            <div class="absolute bottom-0 right-0 bg-gamegarage-black text-white text-xs px-2 py-1 font-['Jersey_10'] pixel-border border-t-2 border-l-2 border-r-0 border-b-0 border-gamegarage-border">
              {project.tags[0]}
            </div>
          </div>
          
          <div class="p-4">
            <div class="flex flex-col mb-3">
              <h2 class="font-['Jersey_10'] text-sm text-gamegarage-yellow mb-2 leading-relaxed">{project.title}</h2>
              <div class="flex gap-1">
                {#each project.tags as tag}
                  <span class="bg-gamegarage-dark px-2 py-0.5 text-xs font-['Jersey_10'] text-base text-gamegarage-yellow">
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
            
            <p class="font-['Jersey_10'] text-base text-gray-300 mb-3 line-clamp-3">{project.description}</p>
            
            <div class="flex justify-between items-center text-xs mt-auto">
              <div class="flex items-center text-gamegarage-light-gray">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="font-['Jersey_10'] text-base">{project.date}</span>
              </div>
              
              <div class="text-gamegarage-yellow font-['Jersey_10'] text-[10px]">
                By: {project.author}
              </div>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
  
  <!-- Pagination -->
  <div class="mt-8 flex justify-center">
    <div class="flex space-x-3">
      <button aria-label="Previous page" class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-gamegarage-yellow transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-yellow text-gamegarage-black font-['Jersey_10'] text-base">1</button>
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors font-['Jersey_10'] text-base hover:text-gamegarage-yellow">2</button>
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors font-['Jersey_10'] text-base hover:text-gamegarage-yellow">3</button>
      <span class="w-10 h-10 flex items-center justify-center text-gamegarage-light-gray font-['Jersey_10'] text-base">...</span>
      <button class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors font-['Jersey_10'] text-base hover:text-gamegarage-yellow">10</button>
      <button aria-label="Next page" class="w-10 h-10 flex items-center justify-center pixel-border bg-gamegarage-black hover:bg-gamegarage-gray transition-colors group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-gamegarage-yellow transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>
