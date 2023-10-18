<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let open: boolean = false;
	let path: string = '';

	$: path = $page.url.pathname;
</script>

<a href="/" class="absolute m-2">
	<img src="logo.png" alt="logo" width="100" />
</a>

<div class="flex w-full place-content-end z-10">
	{#if open}
		<div class="rounded-lg p-2 absolute right-12 top-2">
			<ul>
				<li transition:fly={{ y: -15, delay: 50 * 0 }}>
					<a class:text-blue-400={path === '/'} class="py-2 block hover:text-blue-400" href="/"
						>Home</a
					>
				</li>
				<li transition:fly={{ y: -15, delay: 50 * 1 }}>
					<a
						class:text-blue-400={path === '/about'}
						class="py-2 block hover:text-blue-400"
						href="/about">About</a
					>
				</li>
				<li transition:fly={{ y: -15, delay: 50 * 3 }}>
					<a
						class:text-blue-400={path === '/experience'}
						class="py-2 block hover:text-blue-400"
						href="/experience">Experience</a
					>
				</li>
			</ul>
		</div>
	{/if}
	<div class="top-0">
		<Hamburger bind:open --color="white" --padding="20px" --type="Elastic" />
	</div>
</div>
