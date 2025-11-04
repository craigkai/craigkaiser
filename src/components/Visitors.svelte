<script lang="ts">
	export let views: number | undefined = undefined;
	export let loading: boolean = false;
	export let error: boolean = false;
</script>

<div class="bottom-0 -z-5 fixed left-4 p-4">
	<div class="z-0 place-content-center bottom-0 lg:w-full md:w-full w-1/2">
		{#if loading}
			<span class="animate-pulse">Loading visitor count...</span>
		{:else if error}
			<span class="text-red-400" title="Failed to load visitor count">
				Visitors count unavailable
			</span>
		{:else if views !== undefined}
			<span>Visitors (unique IPs) count #{views}</span>
		{:else}
			<span class="animate-pulse">Loading...</span>
		{/if}
	</div>
</div>
