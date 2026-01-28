<script lang="ts">
	import Icon from '@iconify/svelte';
	import Tooltip from '$components/Tooltip.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const projects = data?.projects.sort((a: { id: number }, b: { id: number }) => {
		return a.id - b.id;
	});
</script>

<svelte:head>
	<title>Experience - Craig Kaiser</title>
	<meta
		name="description"
		content="Explore Craig Kaiser's software engineering projects and professional experience across various technologies."
	/>
</svelte:head>

<div class="flex flex-col lg:p-16 md:m-4 sm:m-4">
	<span class="text-sm text-gray-400"
		>This page pulls data from <a
			class="text-purple-400 hover:text-cyan-400 hover:underline transition-colors duration-200"
			href="https://supabase.com/">Supabase</a
		>
		to populate the pages data!</span
	>
	<div class="lg:text-5xl self-start font-bold leading-tight text-3xl mt-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience:</div>

	<div class="grid grid-rows-1 gap-6 m-16 md:w-2/3 lg:w-2/3">
		{#each projects as project, i}
			<div class="p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:translate-x-2">
				<div class="flex place-items-center mb-2">
					{#each project?.tech || [] as technology}
						<div class="pr-2">
							<div
								class="group inline-block cursor-help relative"
								role="img"
								aria-label={technology?.label}
								tabindex="0"
							>
								<Tooltip text={technology?.label} position="top" />
								<Icon class="text-cyan-400 hover:text-purple-400 text-2xl transition-colors duration-200" icon={technology?.icon} aria-hidden="true" />
							</div>
						</div>
					{/each}
					<span class="text-xl place-items-center font-semibold text-white">{@html project.name}</span>
				</div>
				<span class="text-sm ml-6 description text-gray-300">{@html project.description}</span>

				{#if project?.media}
					<div class="mt-4 relative group">
						<div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
						<img src={project?.media} alt={`Screenshot of ${project.name} project`} loading="lazy" class="relative rounded-lg" />
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	:global(span.description > p) {
		margin: 1em;
	}
</style>
