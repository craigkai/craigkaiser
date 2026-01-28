<script lang="ts">
	let { views, loading = false, error = false }: { views?: number; loading?: boolean; error?: boolean } = $props();
</script>

<div class="bottom-0 z-10 fixed left-4 p-4">
	<div class="place-content-center bottom-0 lg:w-full md:w-full w-1/2 text-sm">
		{#if loading}
			<span class="animate-pulse text-purple-400">Loading visitor count...</span>
		{:else if error}
			<span class="text-pink-400" title="Failed to load visitor count">
				Visitors count unavailable
			</span>
		{:else if views !== undefined}
			<span class="text-gray-400">
				<span class="text-cyan-400">{views}</span> unique visitors
			</span>
		{:else}
			<span class="animate-pulse text-purple-400">Loading...</span>
		{/if}
	</div>
</div>
