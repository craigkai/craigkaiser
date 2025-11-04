<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let open: boolean = false;
	let path: string = '';

	$: path = $page.url.pathname;
</script>

<a
	href="/"
	class="absolute m-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
	aria-label="Home"
>
	<img src="logo.png" alt="Craig Kaiser logo" width="100" />
</a>

<div class="flex w-full place-content-end z-10">
	{#if open}
		<nav class="rounded-lg p-2 absolute right-12 top-2" aria-label="Main navigation">
			<ul>
				<li transition:fly={{ y: -15, delay: 50 * 0 }}>
					<a
						class:text-blue-400={path === '/'}
						class="py-2 block hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2"
						href="/">Home</a
					>
				</li>
				<li transition:fly={{ y: -15, delay: 50 * 1 }}>
					<a
						class:text-blue-400={path === '/about'}
						class="py-2 block hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2"
						href="/about">About</a
					>
				</li>
				<li transition:fly={{ y: -15, delay: 50 * 3 }}>
					<a
						class:text-blue-400={path === '/experience'}
						class="py-2 block hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2"
						href="/experience">Experience</a
					>
				</li>
			</ul>
		</nav>
	{/if}
	<div class="top-0">
		<div class="focus-within:ring-2 focus-within:ring-blue-400 rounded">
			<Hamburger bind:open --color="white" --padding="20px" --type="Elastic" ariaLabel="Menu" />
		</div>
	</div>
</div>
