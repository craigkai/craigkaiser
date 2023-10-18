<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import Icon from '@iconify/svelte';
	import Visitors from '$components/Visitors.svelte';
	import Constellation from '$components/Constellation.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

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
			link: 'https://github.com/craigkai/craigkaiser/blob/b721f6beeeacae0afd30dda677e9b18aa25ef8e8/static/kaiser_craig.pdf'
		}
	];
</script>

<div class="flex flex-col items-center p-16 justify-content-center justify-center">
	<div class="top-0 -z-5 fixed left-4 p-4"><Visitors views={data?.viewsCount} /></div>

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
					<a class="flex" href={link}>
						<span class="m-2 grid place-content-center">
							<Icon icon={source} />
						</span>
						<span class="m-2 hover:uppercase">{label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<div class="absolute inset-y-1/2 inset-x-3/4 group inline-block cursor-help">
	<span
		class="absolute flex flex-col hidden group-hover:flex -left-40 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"
	>
		<div class="text-xs text-gray-400">What tech does this site use?</div>

		<ul>
			<li>Sveltejs (Sveltekit)</li>
			<li>Tailwindcss (Styling)</li>
			<li>Supabase (Postgres DB)</li>
		</ul>
	</span>

	<Icon icon="solar:satellite-bold-duotone" style="font-size: 60px;" />
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- <div
	class="absolute inset-y-3/4 inset-x-1/4 group inline-block cursor-pointer"
	on:click={() => alert('Some animation here')}
>
	<Icon
		icon="streamline:ecology-science-planet-solar-system-ring-planet-saturn-space-astronomy"
		style="font-size: 40px;"
	/>
	<div class="text-xs text-gray-400">(Skills)</div>
</div> -->

<Constellation />
