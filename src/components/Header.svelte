<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';
	import Logo from './Logo.svelte';

	let open = $state(false);
	let path = $derived(page.url.pathname);
</script>

<a
	href="/"
	class="absolute m-3 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg"
	aria-label="Home"
>
	<Logo />
</a>

<div class="flex w-full place-content-end z-10">
	{#if open}
		<nav
			class="rounded-lg p-2 absolute right-14 top-3 backdrop-blur-sm bg-black/30"
			aria-label="Main navigation"
		>
			<ul>
				<li transition:fly={{ y: -15, delay: 50 * 0 }}>
					<a
						class:text-cyan-400={path === '/'}
						class="py-2 block hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded px-3 transition-colors duration-200"
						href="/">Home</a
					>
				</li>
				<li transition:fly={{ y: -15, delay: 50 * 1 }}>
					<a
						class:text-cyan-400={path === '/about'}
						class="py-2 block hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded px-3 transition-colors duration-200"
						href="/about">About</a
					>
				</li>
				<li transition:fly={{ y: -15, delay: 50 * 3 }}>
					<a
						class:text-cyan-400={path === '/experience'}
						class="py-2 block hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded px-3 transition-colors duration-200"
						href="/experience">Experience</a
					>
				</li>
			</ul>
		</nav>
	{/if}
	<div class="top-0">
		<div class="focus-within:ring-2 focus-within:ring-purple-400 rounded">
			<Hamburger bind:open ariaLabel="Menu" />
		</div>
	</div>
</div>
