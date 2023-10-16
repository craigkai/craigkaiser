<script lang="ts">
	import '../app.css';
</script>

<body class="bg-home-sm md:bg-home-md lg:bg-home bg-no-repeat bg-cover h-screen text-white text-xl">
	<slot />
</body>

<style>
	.bg-home-sm {
		background-image: url('/home/background-home-mobile.jpg');
	}

	.md\:bg-home-md {
		background-image: url('/home/background-home-tablet.jpg');
	}

	.lg\:bg-home {
		background-image: url('/home/background-home-desktop.jpg');
	}
</style>
