<script lang="ts">
	import '../app.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<body
	class="bg-home-sm md:bg-home-md lg:bg-home bg-no-repeat bg-cover min-h-screen text-white text-xl"
>
	<Header />
	<slot />
	<Footer />
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
