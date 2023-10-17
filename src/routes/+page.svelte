<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import Icon from '@iconify/svelte';

	const greetings = ['Fullstack Engineer', 'Entrepreneur', 'Rust'];

	const creativeSpaces = [
		{
			source: 'line-md:github',
			label: 'github',
			link: 'https://github.com/craigkai'
		},
		{
			source: 'line-md:linkedin',
			label: 'linkedin',
			link: 'https://www.linkedin.com/in/craig-kaiser/'
		},
		{
			source: 'bx:file',
			label: 'resume',
			link: 'https://github.com/craigkai/craigkaiser/blob/b721f6beeeacae0afd30dda677e9b18aa25ef8e8/static/kaiser_craig.pdf'
		}
	];
</script>

<div class="flex flex-col items-center p-16 justify-content-center justify-center">
	<div class="lg:text-5xl self-start font-bold leading-tight text-3xl">Craig Kaiser</div>

	<div class="self-start mt-4">
		<div class="grid gap-8 items-start justify-start">
			<div class="relative group">
				<div
					class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-white rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
				></div>
				<div
					class="relative p-2 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
				>
					<Typewriter mode="loop" interval={100}>
						{#each greetings as greeting}
							<h1>{greeting}</h1>
						{/each}
					</Typewriter>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-row justify-center">
	<div>
		<ul>
			{#each creativeSpaces as { label, source, link }}
				<li>
					<a class="flex" href={link}>
						<span class="m-2 grid place-content-center">
							<Icon icon={source} />
						</span>
						<span class="m-2 hover:uppercase">{label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<div class="flex justify-center absolute inset-x-0 bottom-0">
	source code on <a
		class="ml-1 font-small text-blue-600 dark:text-blue-500 hover:underline"
		href="https://github.com/craigkai/craigkaiser">Github</a
	>
</div>
