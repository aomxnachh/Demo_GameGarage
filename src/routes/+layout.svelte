<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet">
	<title>GameGarage</title>
	<meta name="description" content="Build, share, and discover pixel-perfect games with our community of indie developers" />
</svelte:head>

<div class="flex flex-col min-h-screen bg-gamegarage-black text-white">
	<Header />
	<main class="flex-1 container mx-auto px-4 py-6 animate-fade-in">
		{@render children?.()}
	</main>
	<Footer />
</div>

<!-- Pixel overlay effect (very subtle) -->
<div class="fixed inset-0 pointer-events-none z-[100] bg-[url('/pixel-overlay.png')] opacity-[0.02]"></div>
