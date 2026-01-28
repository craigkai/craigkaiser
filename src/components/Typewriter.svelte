<script lang="ts">
	import { onMount } from 'svelte';

	let { children, texts = [], interval = 100 }: { children?: any; texts?: string[]; interval?: number } = $props();

	let currentIndex = $state(0);
	let displayText = $state('');
	let isDeleting = $state(false);

	onMount(() => {
		const tick = () => {
			const currentText = texts[currentIndex];

			if (isDeleting) {
				displayText = currentText.substring(0, displayText.length - 1);
			} else {
				displayText = currentText.substring(0, displayText.length + 1);
			}

			let delay = interval;

			if (!isDeleting && displayText === currentText) {
				delay = 2000;
				isDeleting = true;
			} else if (isDeleting && displayText === '') {
				isDeleting = false;
				currentIndex = (currentIndex + 1) % texts.length;
				delay = 500;
			}

			setTimeout(tick, delay);
		};

		if (texts.length > 0) {
			tick();
		}
	});
</script>

<span>{displayText}</span>
