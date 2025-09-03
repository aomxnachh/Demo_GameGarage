<script lang="ts">
  import { page } from '$app/stores';
  
  const projectId = $page.params.id;
  
  // Mock project data
  const project = {
    id: projectId,
    title: "Demo Game",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    addedDate: "18/1/2025",
    contributors: ["Alice", "Bob"],
    tags: ["Adventure", "Indie"],
    externalLinks: {
      itchio: "https://itch.io",
      github: "https://github.com"
    },
    screenshots: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    image: "/placeholder.jpg"
  };
</script>

<svelte:head>
  <title>{project.title} | Projects | GameGarage</title>
</svelte:head>

<div class="max-w-6xl mx-auto">
  <!-- Breadcrumbs -->
  <div class="flex items-center text-sm mb-6 text-gray-400">
    <a href="/" class="hover:text-gamegarage-yellow">Home</a>
    <span class="mx-2">/</span>
    <a href="/projects" class="hover:text-gamegarage-yellow">Projects</a>
    <span class="mx-2">/</span>
    <span class="text-white">{project.title}</span>
  </div>
  
  <!-- Project Content -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Main content -->
    <div class="lg:col-span-2">
      <!-- Project Banner -->
      <div class="rounded-lg overflow-hidden mb-8 shadow-xl animate-fade-in">
        <div class="h-80 bg-blue-400 flex items-center justify-center">
          <span class="text-white font-pixel text-4xl">Demo Game</span>
        </div>
      </div>
      
      <!-- About -->
      <div class="bg-gamegarage-gray rounded-lg p-6 mb-8 animate-slide-in">
        <h2 class="text-2xl font-pixel mb-4">About This Game</h2>
        <p class="text-gray-300">{project.description}</p>
      </div>
      
      <!-- Gallery -->
      <div class="mb-8 animate-slide-in" style="animation-delay: 0.2s">
        <h2 class="text-2xl font-pixel mb-4">Screenshots</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {#each project.screenshots as screenshot, i}
            <div class="bg-gamegarage-gray rounded-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
              <div class="h-48 bg-gray-600 flex items-center justify-center">
                <span class="text-white font-pixel">Screenshot {i+1}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Reviews/Comments -->
      <div class="bg-gamegarage-gray rounded-lg p-6 animate-slide-in" style="animation-delay: 0.3s">
        <h2 class="text-2xl font-pixel mb-4">Reviews</h2>
        
        <!-- Review Form -->
        <div class="mb-6">
          <textarea
            class="w-full bg-gamegarage-light-gray border border-gray-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-gamegarage-yellow"
            rows="3"
            placeholder="Leave a review..."
          ></textarea>
          <div class="mt-2 flex justify-between items-center">
            <div class="flex">
              {#each Array(5) as _, i}
                <button class="text-2xl text-gray-400 hover:text-gamegarage-yellow focus:outline-none transition-colors">★</button>
              {/each}
            </div>
            <button class="btn btn-primary">
              Post Review
            </button>
          </div>
        </div>
        
        <!-- Sample Review -->
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
                <h4 class="font-medium">GameEnthusiast</h4>
                <div class="text-gamegarage-yellow">★★★★☆</div>
              </div>
              <p class="text-sm text-gray-300 mt-2">
                Great game concept and amazing pixel art style! The controls felt responsive and the music was perfect for the atmosphere. Looking forward to the full release!
              </p>
              <div class="mt-2 text-xs text-gray-400">
                Posted 3 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Sidebar -->
    <div class="lg:col-span-1 space-y-6">
      <!-- Project Info Card -->
      <div class="bg-gamegarage-gray rounded-lg p-6 animate-fade-in">
        <h2 class="font-pixel text-xl mb-4">Demo Game</h2>
        
        <div class="space-y-4">
          <div>
            <h3 class="text-sm text-gray-400">added: {project.addedDate}</h3>
          </div>
          
          <div>
            <h3 class="font-medium mb-2">Contributors:</h3>
            <div class="flex flex-wrap gap-2">
              {#each project.contributors as contributor}
                <span class="text-gamegarage-yellow">{contributor}</span>
              {/each}
            </div>
          </div>
          
          <div>
            <h3 class="font-medium mb-2">Tags:</h3>
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <span class="bg-gamegarage-light-gray px-2 py-1 rounded text-sm hover:bg-gamegarage-yellow hover:text-gamegarage-black transition-colors">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
          
          <div>
            <h3 class="font-medium mb-2">External Links:</h3>
            <div class="space-y-2">
              <a 
                href={project.externalLinks.itchio} 
                target="_blank"
                rel="noopener noreferrer"
                class="block bg-gamegarage-light-gray hover:bg-gamegarage-yellow hover:text-gamegarage-black transition-colors py-2 px-4 rounded text-center"
              >
                itch.io
              </a>
              <a 
                href={project.externalLinks.github} 
                target="_blank"
                rel="noopener noreferrer"
                class="block bg-gamegarage-light-gray hover:bg-gamegarage-yellow hover:text-gamegarage-black transition-colors py-2 px-4 rounded text-center"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Similar Projects -->
      <div class="bg-gamegarage-gray rounded-lg p-6 animate-fade-in" style="animation-delay: 0.2s">
        <h2 class="font-pixel text-xl mb-4">Similar Projects</h2>
        
        <div class="space-y-4">
          {#each Array(3) as _, i}
            <a href={`/projects/similar-${i+1}`} class="block group">
              <div class="flex space-x-3">
                <div class="w-16 h-16 bg-gray-600 flex-shrink-0 rounded"></div>
                <div>
                  <h3 class="font-medium group-hover:text-gamegarage-yellow transition-colors">Project Title {i+1}</h3>
                  <p class="text-xs text-gray-400 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tempus elit.</p>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
