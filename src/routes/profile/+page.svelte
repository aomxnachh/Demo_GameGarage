<script lang="ts">
  interface Project {
    id: string;
    title: string;
    description: string;
    author: string;
    date: string;
    tags: string[];
    image?: string;
  }

  interface ContributedProject extends Project {
    contributionType: string;
    ownerName: string;
  }
  
  // User profile data
  const profile = {
    name: "Demo User",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam (Bio)",
    level: 12, // Updated to match the navbar level
    xp: {
      current: 750,
      total: 1000
    },
    badges: Array(5).fill({
      name: "Game Master",
      icon: "/badge-placeholder.jpg"
    }),
    contacts: {
      email: "youremail@gmail.com",
      instagram: "@yourinstagram",
      twitter: "yourtwitter",
      github: "yourgithub"
    }
  };
  
  // My Projects data
  const myProjects: Project[] = [
    {
      id: "project-1",
      title: "Pixel Dungeon",
      description: "A pixel art roguelike dungeon crawler with procedurally generated levels.",
      author: "Demo User",
      date: "01/09/2025",
      tags: ["Adventure", "Roguelike"]
    },
    {
      id: "project-2",
      title: "Space Explorer",
      description: "An open-world space exploration game with trading and combat.",
      author: "Demo User",
      date: "15/08/2025",
      tags: ["Space", "Exploration"]
    },
    {
      id: "project-3",
      title: "Monster Tamer",
      description: "Collect and train monsters in this turn-based RPG adventure.",
      author: "Demo User",
      date: "20/07/2025",
      tags: ["RPG", "Monsters"]
    }
  ];
  
  // Projects I've contributed to
  const contributedProjects: ContributedProject[] = [
    {
      id: "contrib-1",
      title: "Robo Run",
      description: "A fast-paced platformer where you control a robot through dangerous obstacles.",
      author: "PixelMaster",
      ownerName: "PixelMaster",
      date: "05/08/2025",
      tags: ["Platformer", "Action"],
      contributionType: "Level Design"
    },
    {
      id: "contrib-2",
      title: "Castle Defense",
      description: "Defend your castle from waves of enemies in this tower defense game.",
      author: "GameDev123",
      ownerName: "GameDev123",
      date: "10/07/2025",
      tags: ["Strategy", "Tower Defense"],
      contributionType: "Gameplay Mechanics"
    },
    {
      id: "contrib-3",
      title: "Farm Simulator",
      description: "Build and manage your own farm in this relaxing simulation game.",
      author: "RetroGamer",
      ownerName: "RetroGamer",
      date: "25/06/2025",
      tags: ["Simulation", "Relaxing"],
      contributionType: "Sound Design"
    }
  ];
  
  // Calculate XP percentage
  const xpPercentage = (profile.xp.current / profile.xp.total) * 100;
</script>

<svelte:head>
  <title>Profile | GameGarage</title>
</svelte:head>

<div class="max-w-4xl mx-auto animate-fade-in">
  <!-- Profile Card -->
  <div class="border-2 border-gamegarage-yellow rounded-lg p-6 md:p-8">
    <!-- Header -->
    <div class="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
      <!-- Avatar -->
      <div class="w-32 h-32 bg-gray-400 rounded-md flex-shrink-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      
      <!-- Info -->
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-2xl font-pixel mb-2">{profile.name}</h1>
        <p class="text-gray-300 mb-4">{profile.bio}</p>
        
        <div class="flex flex-col md:flex-row md:items-center gap-4">
          <div class="bg-gamegarage-dark pixel-border text-sm inline-flex items-center px-3 py-1">
            Level: <span class="text-gamegarage-yellow ml-1 font-['Jersey_10']">{profile.level}</span>
          </div>
          <div class="flex-1">
            <div class="h-3 bg-gamegarage-dark pixel-border overflow-hidden">
              <div class="h-full bg-gamegarage-yellow" style="width: {xpPercentage}%"></div>
            </div>
            <div class="text-xs text-right mt-1 text-gamegarage-yellow font-['Jersey_10']">
              {profile.xp.current} / {profile.xp.total} XP
            </div>
          </div>
        </div>
      </div>
      
      <!-- Action buttons -->
      <div class="flex flex-col gap-2">
        <button class="btn btn-primary">
          Edit Profile
        </button>
        <button class="bg-gamegarage-gray hover:bg-gamegarage-light-gray text-white px-4 py-2 rounded transition-colors">
          Privacy
        </button>
      </div>
    </div>
    
    <hr class="border-gamegarage-gray my-6" />
    
    <!-- Badge Gallery -->
    <div class="mb-8">
      <h2 class="text-xl font-pixel mb-4">Badge Gallary</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {#each profile.badges as badge, i}
          <div class="animate-slide-in" style="animation-delay: {i * 0.1}s">
            <div class="bg-gamegarage-gray p-4 rounded-md text-center hover:-translate-y-1 transition-transform duration-300">
              <div class="w-12 h-12 mx-auto bg-gray-500 rounded-full flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div class="text-xs">{badge.name}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Contact -->
    <div>
      <h2 class="text-xl font-pixel mb-4">Contact</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href={`mailto:${profile.contacts.email}`} class="bg-gamegarage-gray hover:bg-gamegarage-light-gray transition-colors rounded-md p-3 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gamegarage-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{profile.contacts.email}</span>
        </a>
        <a href={`https://instagram.com/${profile.contacts.instagram.substring(1)}`} target="_blank" rel="noopener noreferrer" class="bg-gamegarage-gray hover:bg-gamegarage-light-gray transition-colors rounded-md p-3 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gamegarage-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span>{profile.contacts.instagram}</span>
        </a>
        <a href={`https://twitter.com/${profile.contacts.twitter}`} target="_blank" rel="noopener noreferrer" class="bg-gamegarage-gray hover:bg-gamegarage-light-gray transition-colors rounded-md p-3 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gamegarage-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          <span>{profile.contacts.twitter}</span>
        </a>
        <a href={`https://github.com/${profile.contacts.github}`} target="_blank" rel="noopener noreferrer" class="bg-gamegarage-gray hover:bg-gamegarage-light-gray transition-colors rounded-md p-3 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gamegarage-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          <span>{profile.contacts.github}</span>
        </a>
      </div>
    </div>
  </div>
  
  <!-- My Projects -->
  <div class="mt-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-['Jersey_10']">My Projects</h2>
      <a href="/projects?filter=my-projects" class="text-gamegarage-yellow hover:underline font-['Jersey_10']">View All</a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each myProjects as project, i}
        <a href={`/projects/${project.id}`} class="bg-gamegarage-gray rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform animate-slide-in" style="animation-delay: {0.3 + (i * 0.1)}s">
          <div class="h-40 bg-gamegarage-light-gray relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-['Jersey_10'] text-gamegarage-yellow mb-1">
              {project.title}
            </h3>
            <div class="flex items-center text-xs text-gray-400 mb-2">
              <span>Created: {project.date}</span>
              <span class="mx-2">•</span>
              <span class="bg-gamegarage-dark px-2 py-1 rounded">{project.tags[0]}</span>
            </div>
            <p class="text-sm text-gray-300 line-clamp-2">
              {project.description}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>
  
  <!-- Projects I Contributed To -->
  <div class="mt-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-['Jersey_10']">Projects I've Contributed To</h2>
      <a href="/projects?filter=contributed" class="text-gamegarage-yellow hover:underline font-['Jersey_10']">View All</a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each contributedProjects as project, i}
        <a href={`/projects/${project.id}`} class="bg-gamegarage-gray rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform animate-slide-in" style="animation-delay: {0.5 + (i * 0.1)}s">
          <div class="h-40 bg-gamegarage-light-gray relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
          </div>
          <div class="p-4">
            <div class="flex justify-between items-start mb-1">
              <h3 class="text-lg font-['Jersey_10'] text-gamegarage-yellow">
                {project.title}
              </h3>
              <div class="bg-gamegarage-orange text-black text-xs px-2 py-1 font-['Jersey_10'] rounded">
                Contributor
              </div>
            </div>
            <div class="flex items-center text-xs text-gray-400 mb-2">
              <span>By: {project.ownerName}</span>
              <span class="mx-2">•</span>
              <span class="bg-gamegarage-dark px-2 py-1 rounded">{project.tags[0]}</span>
            </div>
            <p class="text-sm text-gray-300 line-clamp-2">
              {project.description}
            </p>
            <div class="mt-2 text-xs text-gamegarage-yellow">
              Your contribution: {project.contributionType}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
  
  <!-- Recent Activities -->
  <div class="mt-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-['Jersey_10']">Recent Activities</h2>
      <a href="/profile/activities" class="text-gamegarage-yellow hover:underline font-['Jersey_10']">View All</a>
    </div>
    
    <div class="space-y-4">
      {#each Array(3) as _, i}
        <div class="bg-gamegarage-gray rounded-lg p-4 animate-slide-in" style="animation-delay: {0.7 + (i * 0.1)}s">
          <div class="flex gap-3">
            <div class="w-10 h-10 rounded-full bg-gamegarage-light-gray flex-shrink-0 flex items-center justify-center">
              {#if i % 3 === 0}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              {:else if i % 3 === 1}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              {/if}
            </div>
            <div>
              <p class="text-sm font-['Jersey_10']">
                {i === 0 ? 'You published a new project "Pixel Adventure"' : 
                 i === 1 ? 'You liked "Neon Racer" project' : 
                 'You commented on "Game Design Workshop" event'}
              </p>
              <p class="text-xs text-gray-400 mt-1">2 days ago</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
