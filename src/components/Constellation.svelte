<script lang="ts">
	import Tooltip from '$components/Tooltip.svelte';
</script>

<div class="absolute top-3/4 left-1/4 hidden sm:block">
	<a
		class="group inline-block cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
		href="/about"
		aria-label="Navigate to About page"
	>
		<img
			src="star.png"
			alt=""
			width="105"
			height="105"
			loading="lazy"
			class="hover:scale-150 transition-transform duration-200"
			aria-hidden="true"
		/>

		<Tooltip text="About me" position="top" />
	</a>
</div>

<div class="absolute md:left-40 lg:left-20 top-80 sm:left-5 hidden sm:block">
	<a
		class="group inline-block cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
		href="/experience"
		aria-label="Navigate to Experience page"
	>
		<img
			src="star.png"
			alt=""
			width="105"
			height="105"
			loading="lazy"
			class="hover:scale-150 transition-transform duration-200"
			aria-hidden="true"
		/>

		<Tooltip text="Experience" position="top" />
	</a>
</div>
