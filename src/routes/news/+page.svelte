<script lang="ts">
  interface NewsItem {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
  }
  
  // Sample data for news
  const newsItems: NewsItem[] = Array.from({ length: 12 }, (_, i) => ({
    id: `news-${i+1}`,
    title: "Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "19/02/2025",
    author: "GameGarage Team",
    category: i % 3 === 0 ? "Updates" : i % 3 === 1 ? "Events" : "Announcements",
    image: "/placeholder.jpg"
  }));

  // Filter options
  let selectedCategory: string = '';
  
  // Search input
  let searchQuery: string = '';
  
  // Categories
  const categories = ['Updates', 'Events', 'Announcements', 'All'];
</script>

<svelte:head>
  <title>News | GameGarage</title>
</svelte:head>

<div class="animate-fade-in">
  <h1 class="text-3xl font-pixel text-center mb-4">News & Announcements</h1>
  
  <p class="text-center text-gray-300 max-w-2xl mx-auto mb-8">
    Stay up-to-date with the latest updates, events, and announcements from the GameGarage community.
  </p>
  
  <!-- Search and Filters -->
  <div class="mb-8 flex flex-col md:flex-row gap-4">
    <div class="relative flex-grow">
      <input 
        type="text" 
        placeholder="Search News..." 
        bind:value={searchQuery}
        class="w-full bg-gamegarage-gray border border-gamegarage-light-gray rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-gamegarage-yellow"
      />
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    
    <div class="relative">
      <select 
        bind:value={selectedCategory}
        class="appearance-none bg-gamegarage-gray border border-gamegarage-light-gray rounded-md py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-gamegarage-yellow"
      >
        <option value="">Category</option>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
  
  <!-- News Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each newsItems as news, i}
      <a 
        href={`/news/${news.id}`}
        class="block animate-slide-in"
        style="animation-delay: {i * 0.1}s"
      >
        <div class="card hover:-translate-y-1 transition-all duration-300 h-full">
          <div class="h-48 bg-gray-600 flex items-center justify-center">
            <span class="text-white font-pixel text-xl">for content</span>
          </div>
          
          <div class="p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs px-2 py-0.5 rounded bg-gamegarage-light-gray text-white">
                {news.category}
              </span>
              <div class="flex items-center text-xs text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {news.date}
              </div>
            </div>
            
            <h2 class="font-bold mb-2">{news.title}</h2>
            <p class="text-sm text-gray-300 mb-3 line-clamp-3">{news.excerpt}</p>
            
            <div class="flex justify-between items-center text-xs">
              <span class="text-gamegarage-yellow hover:underline">
                Read more
              </span>
              <span class="text-gray-400">
                By {news.author}
              </span>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
  
  <!-- Pagination -->
  <div class="mt-8 flex justify-center">
    <div class="flex space-x-2">
      <button aria-label="Previous page" class="px-3 py-2 rounded bg-gamegarage-gray hover:bg-gamegarage-light-gray transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button class="px-3 py-1 rounded bg-gamegarage-yellow text-gamegarage-black font-bold">1</button>
      <button class="px-3 py-1 rounded bg-gamegarage-gray hover:bg-gamegarage-light-gray transition-colors">2</button>
      <button class="px-3 py-1 rounded bg-gamegarage-gray hover:bg-gamegarage-light-gray transition-colors">3</button>
      <span class="px-3 py-1">...</span>
      <button class="px-3 py-1 rounded bg-gamegarage-gray hover:bg-gamegarage-light-gray transition-colors">10</button>
      <button aria-label="Next page" class="px-3 py-2 rounded bg-gamegarage-gray hover:bg-gamegarage-light-gray transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>
