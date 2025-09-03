<script lang="ts">
  import { page } from '$app/stores';
  
  const newsId = $page.params.id;
  
  // Mock news data
  const news = {
    id: newsId,
    title: "GameGarage Platform Update",
    excerpt: "We're excited to announce a major update to the GameGarage platform with new features and improvements.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h3>New Features</h3>
      <ul>
        <li>Enhanced project showcase options</li>
        <li>Improved search and filtering</li>
        <li>New badge and achievement system</li>
        <li>Team collaboration tools</li>
      </ul>
      
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h3>Coming Soon</h3>
      <p>We're also working on additional features that will be released in the coming months:</p>
      <ul>
        <li>In-platform game testing</li>
        <li>Advanced analytics for developers</li>
        <li>Community forums and discussion boards</li>
      </ul>
    `,
    date: "19/02/2025",
    author: "GameGarage Team",
    category: "Updates",
    image: "/placeholder.jpg",
    tags: ["Update", "New Features", "Platform"]
  };
  
  // Related news
  const relatedNews = Array.from({ length: 3 }, (_, i) => ({
    id: `related-${i+1}`,
    title: "Related News Title",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "15/02/2025",
    category: "Updates",
    image: "/placeholder.jpg"
  }));
</script>

<svelte:head>
  <title>{news.title} | News | GameGarage</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <!-- Breadcrumbs -->
  <div class="flex items-center text-sm mb-6 text-gray-400">
    <a href="/" class="hover:text-gamegarage-yellow">Home</a>
    <span class="mx-2">/</span>
    <a href="/news" class="hover:text-gamegarage-yellow">News</a>
    <span class="mx-2">/</span>
    <span class="text-white">{news.title}</span>
  </div>
  
  <!-- News Header -->
  <div class="relative rounded-lg overflow-hidden mb-8">
    <div class="h-64 bg-gray-600 flex items-center justify-center">
      <span class="text-white font-pixel text-3xl">for content</span>
    </div>
    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gamegarage-black to-transparent p-6">
      <div class="inline-block mb-2">
        <span class="bg-gamegarage-light-gray text-xs font-medium py-1 px-2 rounded">
          {news.category}
        </span>
      </div>
      <h1 class="text-3xl font-pixel mb-2">{news.title}</h1>
      <p class="text-gray-300">{news.excerpt}</p>
    </div>
  </div>
  
  <!-- News Content -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <!-- Main Content -->
    <div class="md:col-span-3">
      <div class="bg-gamegarage-gray rounded-lg p-6 mb-6 animate-fade-in">
        <div class="flex justify-between items-center mb-4 text-sm">
          <div class="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {news.date}
          </div>
          <div>
            By <span class="text-gamegarage-yellow">{news.author}</span>
          </div>
        </div>
        
        <div class="prose prose-invert max-w-none">
          {@html news.content}
        </div>
      </div>
      
      <!-- Tags -->
      <div class="mb-6">
        <div class="flex flex-wrap gap-2">
          {#each news.tags as tag}
            <span class="bg-gamegarage-gray px-3 py-1 rounded-md text-sm hover:bg-gamegarage-yellow hover:text-gamegarage-black transition-colors cursor-pointer">
              #{tag}
            </span>
          {/each}
        </div>
      </div>
      
      <!-- Share -->
      <div class="bg-gamegarage-gray rounded-lg p-4 mb-6 animate-fade-in">
        <div class="flex items-center justify-between">
          <span class="font-medium">Share this article:</span>
          <div class="flex space-x-3">
            <button aria-label="Share on Twitter" class="w-8 h-8 rounded-full bg-gamegarage-light-gray flex items-center justify-center hover:bg-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </button>
            <button aria-label="Share on Facebook" class="w-8 h-8 rounded-full bg-gamegarage-light-gray flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </button>
            <button aria-label="Share via Email" class="w-8 h-8 rounded-full bg-gamegarage-light-gray flex items-center justify-center hover:bg-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
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
                <h4 class="font-medium">GameDev123</h4>
                <span class="text-xs text-gray-400">5 hours ago</span>
              </div>
              <p class="text-sm text-gray-300 mt-1">
                These new features sound amazing! I'm especially excited about the team collaboration tools. Will there be any tutorials on how to use them effectively?
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
    
    <!-- Sidebar -->
    <div class="md:col-span-1">
      <div class="bg-gamegarage-gray rounded-lg p-4 mb-6 sticky top-20">
        <h3 class="font-pixel text-lg mb-4 pb-2 border-b border-gray-600">Related News</h3>
        
        <div class="space-y-4">
          {#each relatedNews as item, i}
            <a href={`/news/${item.id}`} class="block group">
              <div class="mb-1">
                <div class="h-20 bg-gray-600 rounded flex items-center justify-center">
                  <span class="text-white text-sm">Image</span>
                </div>
              </div>
              <h4 class="font-medium text-sm group-hover:text-gamegarage-yellow transition-colors">{item.title}</h4>
              <div class="flex justify-between items-center mt-1 text-xs">
                <span class="text-gray-400">{item.date}</span>
                <span class="text-gamegarage-yellow">{item.category}</span>
              </div>
            </a>
          {/each}
        </div>
        
        <a href="/news" class="block text-center mt-4 text-sm text-gamegarage-yellow hover:underline">
          View all news
        </a>
      </div>
    </div>
  </div>
</div>
