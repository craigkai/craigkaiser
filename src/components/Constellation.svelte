<script lang="ts">
	import Tooltip from '$components/Tooltip.svelte';
</script>

<div class="absolute top-3/4 left-1/4 hidden sm:block">
	<a
		class="group inline-block cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-full"
		href="/about"
		aria-label="Navigate to About page"
	>
		<div class="relative">
			<div
				class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
			></div>
			<img
				src="star.png"
				alt=""
				width="105"
				height="105"
				loading="lazy"
				class="relative hover:scale-125 transition-all duration-300 drop-shadow-glow-purple group-hover:drop-shadow-glow-cyan"
				aria-hidden="true"
			/>
		</div>

		<Tooltip text="About me" position="top" />
	</a>
</div>

<div class="absolute md:left-40 lg:left-20 top-80 sm:left-5 hidden sm:block">
	<a
		class="group inline-block cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-full"
		href="/experience"
		aria-label="Navigate to Experience page"
	>
		<div class="relative">
			<div
				class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
			></div>
			<img
				src="star.png"
				alt=""
				width="105"
				height="105"
				loading="lazy"
				class="relative hover:scale-125 transition-all duration-300 drop-shadow-glow-pink group-hover:drop-shadow-glow-purple"
				aria-hidden="true"
			/>
		</div>

		<Tooltip text="Experience" position="top" />
	</a>
</div>
