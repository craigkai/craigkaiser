<script lang="ts">
	import Icon from '@iconify/svelte';
	import Tooltip from '$components/Tooltip.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

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
	<span
		>This page pulls data from <a
			class="text-blue-600 dark:text-blue-500 hover:underline"
			href="https://supabase.com/">Supabase</a
		>
		to populate the pages data!</span
	>
	<div class="lg:text-5xl self-start font-bold leading-tight text-3xl">Experience:</div>

	<div class="grid grid-rows-1 gap-4 m-16 md:w-1/2 lg:w-1/2 divide-solid divide-y divide-white">
		{#each projects as project}
			<div class="mb-10">
				<div class="flex place-items-center">
					{#each project?.tech || [] as technology}
						<div class="pr-2">
							<div class="group inline-block cursor-help relative" role="img" aria-label={technology?.label} tabindex="0">
								<Tooltip text={technology?.label} position="top" />
								<Icon class="stroke-blue-400 text-2xl" icon={technology?.icon} aria-hidden="true" />
							</div>
						</div>
					{/each}
					<span class="text-xl place-items-center">{@html project.name}:</span>
				</div>
				<span class="text-sm ml-6 description">{@html project.description}</span>

				{#if project?.media}
					<img src={project?.media} alt={`Screenshot of ${project.name} project`} loading="lazy" />
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
