<script lang="ts">
	import '../app.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import CLI from '$components/CLI.svelte';

	let lastSeenKey: String = '';
	let terminalActive: boolean = false;

	function handlekey(e: any) {
		if (lastSeenKey === ':' && e.key === 'i' && !terminalActive) {
			terminalActive = true;
		}
		lastSeenKey = e.key;
	}
</script>

<svelte:window on:keypress={handlekey} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<body
	class="bg-home-sm md:bg-home-md lg:bg-home bg-no-repeat bg-cover min-h-screen text-white text-xl"
>
	{#if terminalActive}
		<CLI bind:terminalActive />
	{:else}
		<Header />
		<slot />
		<Footer />
	{/if}
</body>

<style>
	.bg-home-sm {
		background-image: url('/home/background-home-mobile.jpg');
	}

	.md\:bg-home-md {
		background-image: url('/home/background-home-tablet.jpg');
	}

	.lg\:bg-home {
		background-image: url('/home/background-home-desktop.jpg');
	}
</style>
