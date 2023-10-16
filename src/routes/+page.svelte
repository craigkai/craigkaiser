<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	const greetings = ['Fullstack Engineer', 'Entrepreneur'];
</script>

<body class="bg-home-sm md:bg-home-md lg:bg-home bg-no-repeat bg-cover h-screen text-white text-xl">
	<div class="flex flex-col items-center p-16 justify-content-center justify-center">
		<div class="lg:text-5xl self-start font-bold leading-tight text-3xl">Craig Kaiser</div>

		<div class="mt-4 p-1 self-start text-lg font-normal bg-red-100 text-black rounded">
			<Typewriter mode="loop" interval={100}>
				{#each greetings as greeting}
					<h1>{greeting}</h1>
				{/each}
			</Typewriter>
		</div>
	</div>
</body>

<style>
	.bg-home-sm {
		background-image: url('home/background-home-mobile.jpg');
	}

	.md\:bg-home-md {
		background-image: url('home/background-home-tablet.jpg');
	}
	.lg\:bg-home {
		background-image: url('home/background-home-desktop.jpg');
	}

	.md\:bg-home-md {
		background-image: url('home/background-home-tablet.jpg');
	}
</style>
