<script lang="ts">
	import Icon from '@iconify/svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	// let currentTime = duration * scrollY / total scroll height
	let scrollY: number;
	let time: number;
	let duration: number;

	const projects = data?.projects.sort((a, b) => {
		return a.id - b.id;
	});
	$: {
		const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
		time = duration * (scrollY / totalScroll);
	}
</script>

<svelte:window bind:scrollY />

<div class="video-container">
	<video
		bind:currentTime={time}
		bind:duration
		preload="metadata"
		muted
		src="https://int.nyt.com/newsgraphics/2020/beirut-explosion-video/main/warehouse-800.mp4"
	/>
</div>

<div id="scroll-container">
	<div class="heading">
		<h1>My Experience!</h1>
	</div>

	{#each projects as project, i}
		<div class="str str{i}">
			<p class="rounded-lg">
				<span class="flex">
					{#each project?.tech || [] as technology}
						<div class="pr-2">
							<Icon class="stroke-blue-400" icon={technology?.icon} />
						</div>
					{/each}
				</span>
				<a class="text-xl place-items-center" href={project.link}>{project.name}:</a>

				<span class="text-sm ml-6">{project.description}</span>

				{#if project?.media}
					<img class="" src={project?.media} alt="alt" />
				{/if}
			</p>
		</div>
	{/each}
</div>

<style>
	.video-container {
		position: absolute;
		top: 0;
		bottom: 0;
		overflow: hidden;
	}
	.video-container video {
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	#scroll-container {
		height: 5000px;
	}

	.heading {
		position: absolute;
		top: 200px;
		width: 100%;
		text-align: center;
		color: white;
	}

	.heading h1 {
		color: white;
		font-size: 4em;
	}
	.str {
		position: absolute;
		display: flex;
		flex-wrap: wrap;
		left: 50%;
		transform: translate(-50%, 0);
		line-height: 1.5;
		opacity: 0.8;
	}

	.str p {
		color: white;
		background-color: black;
		padding: 2em;
		min-width: 20em;
	}

	.str p:nth-child(2) {
		background-color: white;
		color: black;
	}

	.str0 {
		top: 1000px;
	}

	.str1 {
		top: 2000px;
	}

	.str2 {
		top: 3000px;
	}

	.str3 {
		top: 4000px;
	}
</style>
