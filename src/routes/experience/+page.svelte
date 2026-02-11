<script lang="ts">
	import Icon from '@iconify/svelte';
	import Tooltip from '$components/Tooltip.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const projects = data?.projects.sort((a: { sort_order: number }, b: { sort_order: number }) => {
		return a.sort_order - b.sort_order;
	});

	function stripHtml(html: string): string {
		return html.replace(/<[^>]*>/g, '');
	}

	function parseTitle(name: string): { role: string; company: string; dates: string } {
		const stripped = stripHtml(name);
		const parts = stripped.split('|').map((p) => p.trim());
		return {
			role: parts[0] || '',
			company: parts[1] || '',
			dates: parts[2] || ''
		};
	}
</script>

<svelte:head>
	<title>Experience - Craig Kaiser</title>
	<meta
		name="description"
		content="Explore Craig Kaiser's software engineering projects and professional experience across various technologies."
	/>
</svelte:head>

<div class="flex flex-col px-4 py-8 lg:px-16 lg:py-16 max-w-5xl mx-auto">
	<h1 class="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
		Experience
	</h1>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		{#each projects as project, i}
			{@const parsed = parseTitle(project.name)}
			<div
				class="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 animate-fade-in-up hover:scale-[1.02] {project?.media ? 'lg:col-span-2' : ''}"
				style="animation-delay: {i * 100}ms"
			>
				<!-- Header: Role, Company, Dates -->
				<div class="mb-4">
					<h2 class="text-xl lg:text-2xl font-bold text-white mb-1">
						{parsed.role}
					</h2>
					<div class="flex flex-wrap items-center gap-2 text-sm">
						<span class="text-purple-400 font-medium">{@html project.name.includes('<a') ? project.name.match(/<a[^>]*>.*?<\/a>/)?.[0] || parsed.company : parsed.company}</span>
						<span class="text-gray-500">•</span>
						<span class="text-gray-400">{parsed.dates}</span>
					</div>
				</div>

				<!-- Tech Badges -->
				{#if project?.tech?.length}
					<div class="flex flex-wrap gap-2 mb-4">
						{#each project.tech as technology}
							<div
								class="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200 cursor-default"
							>
								<Icon class="text-cyan-400 group-hover:text-purple-400 text-sm transition-colors duration-200" icon={technology?.icon} />
								<span class="text-xs text-gray-300 group-hover:text-white transition-colors duration-200">{technology?.label}</span>
							</div>
						{/each}
					</div>
				{/if}

				<!-- Description -->
				<div class="text-sm text-gray-300 leading-relaxed description">
					{@html project.description}
				</div>

				<!-- Media -->
				{#if project?.media}
					<div class="mt-6 relative group">
						<div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
						<img
							src={project.media}
							alt={`Screenshot of ${stripHtml(project.name)}`}
							loading="lazy"
							class="relative rounded-lg w-full"
						/>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	:global(.description p) {
		margin-bottom: 0.75rem;
	}

	:global(.description p:last-child) {
		margin-bottom: 0;
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in-up {
		opacity: 0;
		animation: fade-in-up 0.5s ease-out forwards;
	}
</style>
