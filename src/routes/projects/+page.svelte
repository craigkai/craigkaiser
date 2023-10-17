<script lang="ts">
	import Header from '$components/Header.svelte';
	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<Header />

<div class="flex flex-col items-center p-16 justify-content-center justify-center">
	<div class="lg:text-5xl self-start font-bold leading-tight text-3xl">Projects:</div>

	{#each data?.projects as project}
		<span>{project.name}</span>
		<span>{project.description}</span>
	{/each}
</div>
