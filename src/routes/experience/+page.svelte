<script lang="ts">
	import Icon from '@iconify/svelte';
	/** @type {import('./$types').PageData} */
	export let data: any;

	const projects = data?.projects.sort((a: { id: number }, b: { id: number }) => {
		return a.id - b.id;
	});
</script>

<div class="flex flex-col lg:p-16 md:m-4 sm:m-4">
	<div class="lg:text-5xl self-start font-bold leading-tight text-3xl">Experience:</div>

	<div class="grid grid-rows-1 gap-4 m-16 md:w-1/2 lg:w-1/2 divide-solid divide-y divide-white">
		{#each projects as project}
			<div class="mb-10">
				<div class="flex place-items-center">
					{#each project?.tech || [] as technology}
						<div class="pr-2">
							<Icon class="stroke-blue-400" icon={technology?.icon} />
						</div>
					{/each}
					<a class="text-xl place-items-center" href={project.link}>{project.name}:</a>
				</div>
				<span class="text-sm ml-6 description">{@html project.description}</span>

				{#if project?.media}
					<img src={project?.media} alt="alt" />
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
