<script lang="ts">
	import Typewriter from '$components/Typewriter.svelte';
	import Icon from '@iconify/svelte';
	import Visitors from '$components/Visitors.svelte';
	import Constellation from '$components/Constellation.svelte';
	import Tooltip from '$components/Tooltip.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

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
	<div
		class="lg:text-5xl self-start font-bold leading-tight text-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
	>
		Craig Kaiser
	</div>

	<div class="self-start mt-4">
		<div class="grid gap-8 items-start justify-start">
			<div class="relative group">
				<div
					class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt animate-pulse-glow"
				></div>
				<div
					class="relative px-4 py-3 bg-black/90 rounded-lg leading-none flex items-center backdrop-blur-sm border border-white/10"
				>
					<h1 class="text-white"><Typewriter texts={greetings} interval={100} /></h1>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col items-center p-16 justify-content-center justify-center">
	<div>
		<ul class="space-y-2">
			{#each creativeSpaces as { label, source, link }, i}
				<li
					class="transform hover:translate-x-2 transition-transform duration-200"
					style="animation-delay: {i * 100}ms"
				>
					<a
						class="flex items-center focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2 group hover:bg-white/5 transition-all duration-200"
						href={link}
						aria-label={label === 'github'
							? 'View my GitHub profile'
							: label === 'linkedin'
								? 'Connect on LinkedIn'
								: 'Download my resume'}
						target={label === 'github' || label === 'linkedin' ? '_blank' : undefined}
						rel={label === 'github' || label === 'linkedin' ? 'noopener noreferrer' : undefined}
					>
						<span
							class="m-2 grid place-content-center text-cyan-400 group-hover:text-purple-400 transition-colors duration-200"
							aria-hidden="true"
						>
							<Icon icon={source} />
						</span>
						<span class="m-2 capitalize group-hover:text-pink-400 transition-colors duration-200"
							>{label}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<div
	class="absolute inset-y-1/2 inset-x-3/4 group inline-block cursor-help hidden lg:block animate-float"
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

	<Icon
		icon="solar:satellite-bold-duotone"
		style="font-size: 60px;"
		class="text-purple-400 hover:text-cyan-400 transition-colors duration-300"
		aria-hidden="true"
	/>
</div>

<Constellation />

<Visitors views={data?.viewsCount} error={data?.viewsCount === 0} />

<div
	class="fixed bottom-4 right-4 text-xs text-gray-400 opacity-50 hover:opacity-100 transition-opacity"
>
	<div class="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-500/30">
		<span class="font-mono"
			>Tip: Press <kbd class="bg-purple-900/50 px-1.5 py-0.5 rounded text-cyan-400">:</kbd><kbd
				class="bg-purple-900/50 px-1.5 py-0.5 rounded text-cyan-400">i</kbd
			> for terminal mode</span
		>
	</div>
</div>
