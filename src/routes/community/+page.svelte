<script lang="ts">
  interface TeamMember {
    id: string;
    name: string;
    role: string;
    image?: string;
  }
  
  // Sample data for team members
  const cofounders: TeamMember[] = [
    {
      id: 'member-1',
      name: 'Prachya Sangkharat',
      role: 'Lead GameGarage',
      image: '/placeholder.jpg'
    },
    {
      id: 'member-2',
      name: 'Thanakit ...',
      role: 'Lead GameGarage',
      image: '/placeholder.jpg'
    }
  ];
  
  const members: TeamMember[] = Array.from({ length: 3 }, (_, i) => ({
    id: `member-${i+3}`,
    name: 'Thiradan Yamu',
    role: 'Staff',
    image: '/placeholder.jpg'
  }));
</script>

<svelte:head>
  <title>Community | GameGarage</title>
</svelte:head>

<div class="animate-fade-in">
  <h1 class="text-3xl font-pixel text-center mb-8">GameGarage Teams</h1>
  
  <!-- Co-Founders Section -->
  <section class="mb-12">
    <h2 class="text-xl font-pixel mb-6 border-b-2 border-gamegarage-yellow pb-2">Co-Founder</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each cofounders as member, i}
        <div 
          class="bg-gamegarage-gray rounded-lg p-6 text-center animate-slide-in hover:-translate-y-1 transition-all duration-300"
          style="animation-delay: {i * 0.2}s"
        >
          <div class="w-24 h-24 mx-auto bg-gray-400 rounded-lg mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-1">{member.name}</h3>
          <p class="text-gamegarage-yellow">{member.role}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <!-- Members Section -->
  <section>
    <h2 class="text-xl font-pixel mb-6 border-b-2 border-gamegarage-yellow pb-2">Members</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each members as member, i}
        <div 
          class="bg-gamegarage-gray rounded-lg p-6 text-center animate-slide-in hover:-translate-y-1 transition-all duration-300"
          style="animation-delay: {0.4 + (i * 0.2)}s"
        >
          <div class="w-24 h-24 mx-auto bg-gray-400 rounded-lg mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-1">{member.name}</h3>
          <p class="text-gamegarage-yellow">{member.role}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <!-- Community Stats -->
  <section class="mt-12 text-center">
    <h2 class="text-xl font-pixel mb-6">Join Our Community</h2>
    <p class="text-gray-300 max-w-2xl mx-auto mb-8">
      GameGarage is a thriving community of game developers, artists, and enthusiasts who are passionate about creating and sharing indie games. Join us today!
    </p>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
      <div class="bg-gamegarage-gray rounded-lg p-4 animate-slide-in hover:bg-gamegarage-light-gray transition-colors">
        <div class="text-3xl font-bold text-gamegarage-yellow">2.5K+</div>
        <div class="text-sm text-gray-300">Members</div>
      </div>
      <div class="bg-gamegarage-gray rounded-lg p-4 animate-slide-in hover:bg-gamegarage-light-gray transition-colors" style="animation-delay: 0.1s">
        <div class="text-3xl font-bold text-gamegarage-yellow">450+</div>
        <div class="text-sm text-gray-300">Projects</div>
      </div>
      <div class="bg-gamegarage-gray rounded-lg p-4 animate-slide-in hover:bg-gamegarage-light-gray transition-colors" style="animation-delay: 0.2s">
        <div class="text-3xl font-bold text-gamegarage-yellow">120+</div>
        <div class="text-sm text-gray-300">Events</div>
      </div>
      <div class="bg-gamegarage-gray rounded-lg p-4 animate-slide-in hover:bg-gamegarage-light-gray transition-colors" style="animation-delay: 0.3s">
        <div class="text-3xl font-bold text-gamegarage-yellow">10K+</div>
        <div class="text-sm text-gray-300">Monthly Visitors</div>
      </div>
    </div>
    
    <a 
      href="/signup" 
      class="inline-block mt-8 px-6 py-3 bg-gamegarage-yellow text-gamegarage-black font-medium rounded-md hover:bg-yellow-500 transition-colors animate-slide-in"
      style="animation-delay: 0.5s"
    >
      Join GameGarage
    </a>
  </section>
</div>
