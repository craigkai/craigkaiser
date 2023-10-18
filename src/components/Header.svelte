<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { fly } from 'svelte/transition';

	let open: boolean = false;
</script>

<div class="flex w-full place-content-end">
	{#if open}
		<div class="rounded-lg absolute right-12 top-2">
			<ul>
				<li transition:fly={{ y: -15, delay: 50 * 0 }}>
					<a class="py-2 block hover:text-blue-400" href="/">Home</a>
				</li>
				<li transition:fly={{ y: -15, delay: 50 * 1 }}>
					<a class="py-2 block hover:text-blue-400" href="/about">About</a>
				</li>
				<li transition:fly={{ y: -15, delay: 50 * 3 }}>
					<a class="py-2 block hover:text-blue-400" href="/experience">Experience</a>
				</li>
			</ul>
		</div>
	{/if}
	<div class="top-0">
		<Hamburger bind:open --color="white" --padding="20px" --type="Elastic" />
	</div>
</div>
