<script lang="ts">
	export let text: string = '';
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';

	const positionClasses = {
		top: '-translate-y-full -top-2 left-1/2 -translate-x-1/2 after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-x-transparent after:border-b-transparent after:border-t-gray-700',
		bottom:
			'translate-y-full -bottom-2 left-1/2 -translate-x-1/2 after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-x-transparent after:border-t-transparent after:border-b-gray-700',
		left: '-translate-x-full -left-2 top-1/2 -translate-y-1/2 after:top-1/2 after:left-[100%] after:-translate-y-1/2 after:border-y-transparent after:border-r-transparent after:border-l-gray-700',
		right:
			'translate-x-full -right-2 top-1/2 -translate-y-1/2 after:top-1/2 after:right-[100%] after:-translate-y-1/2 after:border-y-transparent after:border-l-transparent after:border-r-gray-700'
	};
</script>

<span
	class="absolute flex flex-col hidden group-hover:flex group-focus-within:flex w-48 px-2 py-1 bg-blue-600 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:border-8 z-10 {positionClasses[
		position
	]}"
	role="tooltip"
>
	<slot>
		{text}
	</slot>
</span>
