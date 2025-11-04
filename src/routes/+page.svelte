<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import Icon from '@iconify/svelte';
	import Visitors from '$components/Visitors.svelte';
	import Constellation from '$components/Constellation.svelte';
	import Tooltip from '$components/Tooltip.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const greetings = ['Fullstack Engineer', 'Entrepreneur', 'Tech Enthusiast', 'Other Stuff'];

	const creativeSpaces = [
		{
			source: 'line-md:github',
			label: 'github',
			link: 'https://github.com/craigkai'
		},
		{
			source: 'line-md:linkedin',
			label: 'linkedin',
			link: 'https://www.linkedin.com/in/craig-kaiser/'
		},
		{
			source: 'bx:file',
			label: 'resume',
			link: '/kaiser_craig.pdf'
		}
	];
</script>

<svelte:head>
	<title>Craig Kaiser - Fullstack Engineer</title>
</svelte:head>

<div class="flex flex-col items-center p-16 justify-content-center justify-center">
	<div class="lg:text-5xl self-start font-bold leading-tight text-3xl">Craig Kaiser</div>

	<div class="self-start mt-4">
		<div class="grid gap-8 items-start justify-start">
			<div class="relative group">
				<div
					class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-white rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
				></div>
				<div
					class="relative p-2 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
				>
					<Typewriter mode="loop" interval={100}>
						{#each greetings as greeting}
							<h1>{greeting}</h1>
						{/each}
					</Typewriter>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col items-center p-16 justify-content-center justify-center">
	<div>
		<ul>
			{#each creativeSpaces as { label, source, link }}
				<li>
					<a
						class="flex focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded p-1"
						href={link}
						aria-label={label === 'github' ? 'View my GitHub profile' : label === 'linkedin' ? 'Connect on LinkedIn' : 'Download my resume'}
						target={label === 'github' || label === 'linkedin' ? '_blank' : undefined}
						rel={label === 'github' || label === 'linkedin' ? 'noopener noreferrer' : undefined}
					>
						<span class="m-2 grid place-content-center" aria-hidden="true">
							<Icon icon={source} />
						</span>
						<span class="m-2 hover:uppercase capitalize">{label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<div
	class="absolute inset-y-1/2 inset-x-3/4 group inline-block cursor-help hidden lg:block"
	role="button"
	tabindex="0"
	aria-label="Technologies used in this site"
>
	<Tooltip position="top">
		<div class="text-xs">What tech does this site use?</div>

		<ul class="text-left">
			<li>Sveltejs (Sveltekit)</li>
			<li>Tailwindcss (Styling)</li>
			<li>Supabase (Postgres DB)</li>
		</ul>
	</Tooltip>

	<Icon icon="solar:satellite-bold-duotone" style="font-size: 60px;" aria-hidden="true" />
</div>


<Constellation />

<Visitors views={data?.viewsCount} error={data?.viewsCount === 0} />

<div class="fixed bottom-4 right-4 text-xs text-gray-400 opacity-50 hover:opacity-100 transition-opacity">
	<div class="bg-gray-800 rounded px-3 py-2 border border-gray-600">
		<span class="font-mono">Tip: Press <kbd class="bg-gray-700 px-1 rounded">:</kbd><kbd class="bg-gray-700 px-1 rounded">i</kbd> for terminal mode</span>
	</div>
</div>
