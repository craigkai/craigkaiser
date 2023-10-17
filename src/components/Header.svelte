<script lang="ts">
	let showMenu: boolean = true;
</script>

<div class="hidden w-full md:flex md:items-center justify-end md:w-auto" id="menu">
	<ul
		class="
        text-base
        text-white
        items-end
        pt-14
        absolute
        md:flex
        md:justify-between
        "
	>
		<li>
			<a class="md:p-4 py-2 block hover:text-blue-400" href="/">Home</a>
		</li>
		<li>
			<a class="md:p-4 py-2 block opacity-50 cursor-not-allowed" href="#">About</a>
		</li>
		<li>
			<a class="md:p-4 py-2 block opacity-50 cursor-not-allowed" href="#">Work</a>
		</li>
		<li>
			<a class="md:p-4 py-2 block hover:text-blue-400" href="/projects">Projects</a>
		</li>
	</ul>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
	on:click={() => (showMenu = !showMenu)}
	class:hidden={showMenu}
	xmlns="<http://www.w3.org/2000/svg>"
	id="menu-button"
	class="h-6 w-6 cursor-pointer md:hidden block"
	fill="none"
	viewBox="0 0 24 24"
	stroke="currentColor"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M4 6h16M4 12h16M4 18h16"
	/>
</svg>
