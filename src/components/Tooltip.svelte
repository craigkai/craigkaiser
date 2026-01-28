<script lang="ts">
	export let text: string = '';
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';

	const positionClasses = {
		top: '-translate-y-full -top-2 left-1/2 -translate-x-1/2 after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-x-transparent after:border-b-transparent after:border-t-purple-900',
		bottom:
			'translate-y-full -bottom-2 left-1/2 -translate-x-1/2 after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-x-transparent after:border-t-transparent after:border-b-purple-900',
		left: '-translate-x-full -left-2 top-1/2 -translate-y-1/2 after:top-1/2 after:left-[100%] after:-translate-y-1/2 after:border-y-transparent after:border-r-transparent after:border-l-purple-900',
		right:
			'translate-x-full -right-2 top-1/2 -translate-y-1/2 after:top-1/2 after:right-[100%] after:-translate-y-1/2 after:border-y-transparent after:border-l-transparent after:border-r-purple-900'
	};
</script>

<span
	class="absolute flex flex-col hidden group-hover:flex group-focus-within:flex w-48 px-3 py-2 bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:border-8 z-10 border border-purple-500/30 backdrop-blur-sm shadow-lg shadow-purple-500/20 {positionClasses[
		position
	]}"
	role="tooltip"
>
	<slot>
		{text}
	</slot>
</span>
