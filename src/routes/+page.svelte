<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import Icon from '@iconify/svelte';

	const greetings = ['Fullstack Engineer', 'Entrepreneur'];

	const creativeSpaces = [
		{
			source: 'line-md:github',
			label: 'Github',
			link: 'https://github.com/craigkai'
		},
		{
			source: 'line-md:linkedin',
			label: 'Linkedin',
			link: 'https://www.linkedin.com/in/craig-kaiser/'
		},
		{
			source: 'mdi:paper-outline',
			label: 'Resume',
			link: '/resume.pdf'
		}
	];
</script>

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

<div class="flex flex-row justify-center">
	<div>
		<ul>
			{#each creativeSpaces as { label, source, link }}
				<li>
					<a class="flex" href={link}>
						<span class="m-2 grid place-content-center">
							<Icon icon={source} />
						</span>
						<span class="m-2">{label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
