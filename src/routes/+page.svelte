<script lang="ts">
  interface NewsItem {
    id: string;
    title: string;
    content: string;
    date: string;
    image: string;
  }

  // Sample data for news
  const featuredNews: NewsItem = {
    id: "news-1",
    title: "Latest GameGarage Update",
    content: "We've just released the newest version of GameGarage with improved project submissions, better pixel art tools, and an enhanced game jam system.",
    date: "19/02/2025",
    image: "/placeholder.jpg"
  };
  
  const smallNews: NewsItem[] = [
    {
      id: "news-2",
      title: "New Game Submission Features",
      content: "Now you can submit your pixel games with multiple screenshots, GIFs, and even playable demos directly in the browser.",
      date: "19/02/2025",
      image: "/placeholder.jpg"
    },
    {
      id: "news-3",
      title: "Community Event Announced",
      content: "Join our upcoming Pixel Art Game Jam! Create a game with limited colors and resolution in just 48 hours.",
      date: "19/02/2025",
      image: "/placeholder.jpg"
    }
  ];

  // Stats
  const stats = [
    { label: "Members", value: "100" },
    { label: "Projects", value: "250" },
    { label: "Activities", value: "50" }
  ];
</script>

<!-- Hero Section -->
<section class="relative bg-gamegarage-dark mb-10 pixel-border border-gamegarage-yellow">
  <div class="h-72 md:h-[28rem] bg-cover bg-center" style="background-image: url('https://i.pinimg.com/1200x/93/c1/39/93c1396ff8d58075989dd32e90381260.jpg')">
    <div class="absolute inset-0 bg-gradient-to-t from-gamegarage-black via-transparent to-transparent"></div>
  </div>
  
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
    <h1 class="text-3xl md:text-5xl font-['Jersey_10'] mb-6 animate-fade-in text-gamegarage-yellow drop-shadow-lg">
      Game<span class="text-white">Garage</span>
    </h1>
    <p class="max-w-lg mx-auto text-sm md:text-base mb-6 animate-slide-in font-['Jersey_10'] text-xl">
      Build, share, and discover pixel-perfect games with our community of indie developers
    </p>
    
    <!-- Stats -->
    <div class="flex flex-wrap justify-center gap-8 mt-4">
      {#each stats as stat}
        <div class="text-center group animate-fade-in" style="animation-delay: {stats.indexOf(stat) * 0.2}s">
          <p class="text-gamegarage-yellow text-2xl md:text-3xl font-['Jersey_10'] group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
          <p class="text-sm font-['Jersey_10'] text-lg opacity-80">{stat.label}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- News Section -->
<section class="mb-8">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl md:text-2xl font-['Jersey_10'] text-gamegarage-yellow">News & Updates</h2>
    <a href="/news" class="text-sm text-gamegarage-yellow hover:text-gamegarage-orange pixel-border px-2 py-1 font-['Jersey_10'] text-lg">View All</a>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Featured News -->
    <div class="md:col-span-2">
      <a href={`/news/${featuredNews.id}`} class="block">
        <div class="game-card hover:scale-[1.01] transition-transform duration-300 h-full">
          <div class="aspect-[16/9] bg-gamegarage-gray flex items-center justify-center overflow-hidden">
            <span class="text-white font-['Jersey_10'] text-xs">Featured News Image</span>
          </div>
          <div class="p-4">
            <h3 class="font-['Jersey_10'] text-sm mb-3 text-gamegarage-yellow leading-relaxed">{featuredNews.title}</h3>
            <p class="font-['Jersey_10'] text-base text-gray-300 mb-2 line-clamp-3">{featuredNews.content}</p>
            <div class="flex items-center text-xs text-gamegarage-light-gray">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="font-['VT323'] text-base">{featuredNews.date}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
    
    <!-- Smaller News -->
    <div class="space-y-6">
      {#each smallNews as news}
        <a href={`/news/${news.id}`} class="block">
          <div class="game-card hover:scale-[1.01] transition-transform duration-300">
            <div class="aspect-[16/9] bg-gamegarage-gray flex items-center justify-center overflow-hidden">
              <span class="text-white font-['Press_Start_2P'] text-xs">News Image</span>
            </div>
            <div class="p-3">
              <h3 class="font-['Jersey_10'] text-xs mb-2 text-gamegarage-yellow leading-relaxed">{news.title}</h3>
              <p class="font-['Jersey_10'] text-sm text-gray-300 mb-1 line-clamp-2">{news.content}</p>
              <div class="flex items-center text-xs text-gamegarage-light-gray">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="font-['Jersey_10'] text-sm">{news.date}</span>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
