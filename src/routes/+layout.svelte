<script lang="ts">
	import '../app.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import CLI from '$components/CLI.svelte';
	import Particles from '$components/Particles.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let lastSeenKey = $state('');
	let terminalActive = $state(false);

	function handlekey(e: KeyboardEvent) {
		if (lastSeenKey === ':' && e.key === 'i' && !terminalActive) {
			terminalActive = true;
		}
		lastSeenKey = e.key;
	}
</script>

<svelte:window onkeypress={handlekey} />

<Particles />
{#if terminalActive}
	<CLI bind:terminalActive />
{:else}
	<Header />
	{@render children()}
	<Footer />
{/if}
