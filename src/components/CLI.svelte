<script lang="ts">
	import * as commands from '$lib/commands';

	let pretext: string = '>';
	let output: string = '';
	let text: string = '';

	export let terminalActive: boolean;

	async function handlekey(e: any) {
		const command: string = text.replace('--', '');
		if (e.key === 'Enter') {
			if (text === ':q') {
				terminalActive = false;
			} else {
				if (commands[command]) {
					output = JSON.stringify(await commands[command]());
					text = '';
				} else {
					output = 'command not found!';
					text = '';
				}
			}
		}
	}

	function init(el: HTMLInputElement) {
		el.focus();
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:keypress={handlekey}
	class="absolute grid grid-rows-12 grid-cols-12 w-full h-full z-10 terminal-container"
>
	<section
		class="rounded-lg row-start-4 row-span-6 col-start-4 col-span-6 bg-black opacity-50"
		id="terminal-window"
	></section>

	<section class="overflow-hidden row-start-4 row-span-6 col-start-4 col-span-6 m-2" id="terminal">
		<span class="ml-1">{@html output}</span><br />
		<span class="blink-me mr-1">{pretext}</span>
		<input
			use:init
			class="absolute bg-transparent appearance-none border-none focus:outline-none text-white"
			bind:value={text}
		/>
	</section>
</div>

<style>
	.terminal-container {
		background: rgb(2, 0, 36);
		background: linear-gradient(
			90deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(9, 67, 121, 1) 13%,
			rgba(0, 212, 255, 1) 100%
		);
	}
	.blink-me {
		animation: blinker 2s linear infinite;
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}
</style>
