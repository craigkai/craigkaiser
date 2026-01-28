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
					let res = await commands[command]();
					if (typeof res === 'object') {
						output = JSON.stringify(res) || '';
					} else {
						output = res || '';
					}
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
		class="rounded-xl row-start-4 row-span-6 col-start-4 col-span-6 bg-black/80 backdrop-blur-md border border-purple-500/30"
		id="terminal-window"
	></section>

	<section
		class="z-20 overflow-scroll row-start-4 row-span-6 col-start-4 col-span-6 m-4"
		id="terminal"
	>
		<span class="ml-1 text-cyan-400">{@html output}</span><br />
		<span class="blink-me mr-1 text-pink-400">{pretext}</span>
		<input
			use:init
			class="bg-transparent appearance-none border-none focus:outline-none text-white caret-purple-400"
			bind:value={text}
		/>
	</section>
</div>

<style>
	.terminal-container {
		background: linear-gradient(
			135deg,
			rgba(6, 182, 212, 0.1) 0%,
			rgba(168, 85, 247, 0.15) 50%,
			rgba(236, 72, 153, 0.1) 100%
		);
		animation: gradient-shift 10s ease infinite;
	}

	@keyframes gradient-shift {
		0%, 100% {
			background: linear-gradient(
				135deg,
				rgba(6, 182, 212, 0.1) 0%,
				rgba(168, 85, 247, 0.15) 50%,
				rgba(236, 72, 153, 0.1) 100%
			);
		}
		33% {
			background: linear-gradient(
				135deg,
				rgba(168, 85, 247, 0.1) 0%,
				rgba(236, 72, 153, 0.15) 50%,
				rgba(6, 182, 212, 0.1) 100%
			);
		}
		66% {
			background: linear-gradient(
				135deg,
				rgba(236, 72, 153, 0.1) 0%,
				rgba(6, 182, 212, 0.15) 50%,
				rgba(168, 85, 247, 0.1) 100%
			);
		}
	}

	.blink-me {
		animation: blinker 1s ease-in-out infinite;
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}
</style>
