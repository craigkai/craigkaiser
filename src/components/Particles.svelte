<script lang="ts">
	import { onMount } from 'svelte';

	let particles: Array<{
		id: number;
		x: number;
		y: number;
		size: number;
		duration: number;
		delay: number;
		color: string;
	}> = [];

	const colors = ['#06b6d4', '#a855f7', '#ec4899'];

	onMount(() => {
		particles = Array.from({ length: 30 }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 4 + 1,
			duration: Math.random() * 20 + 15,
			delay: Math.random() * 10,
			color: colors[Math.floor(Math.random() * colors.length)]
		}));
	});
</script>

<div class="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
	{#each particles as particle (particle.id)}
		<div
			class="particle"
			style="
				left: {particle.x}%;
				top: {particle.y}%;
				width: {particle.size}px;
				height: {particle.size}px;
				background-color: {particle.color};
				animation-duration: {particle.duration}s;
				animation-delay: {particle.delay}s;
			"
		></div>
	{/each}
</div>

<style>
	.particle {
		position: absolute;
		border-radius: 50%;
		opacity: 0.3;
		animation: float-particle linear infinite;
	}

	@keyframes float-particle {
		0% {
			transform: translateY(0) translateX(0);
			opacity: 0;
		}
		10% {
			opacity: 0.4;
		}
		50% {
			transform: translateY(-50vh) translateX(20px);
			opacity: 0.2;
		}
		90% {
			opacity: 0.4;
		}
		100% {
			transform: translateY(-100vh) translateX(-20px);
			opacity: 0;
		}
	}
</style>
