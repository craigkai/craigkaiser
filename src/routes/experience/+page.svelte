<script lang="ts">
	import Header from '$components/Header.svelte';
	import Icon from '@iconify/svelte';
	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Header />

<div class="flex flex-col lg:p-16 md:m-4 sm:m-4">
	<div class="lg:text-5xl self-start font-bold leading-tight text-3xl">Experience:</div>

	<div class="grid grid-rows-1 gap-4 m-16 w-1/2">
		{#each data?.projects as project}
			<div class="flex place-items-center">
				{#each project?.tech || [] as technology}
					<div class="pr-2">
						<Icon class="stroke-blue-400" icon={technology?.icon} />
					</div>
				{/each}
				<a class="text-xl place-items-center" href={project.link}>{project.name}:</a>
			</div>
			<span class="text-sm ml-6">{project.description}</span>
		{/each}
	</div>
</div>
