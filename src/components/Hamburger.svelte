<script lang="ts">
	let { open = $bindable(false), ariaLabel = 'Menu' }: { open?: boolean; ariaLabel?: string } = $props();

	function toggle() {
		open = !open;
	}
</script>

<button
	class="hamburger"
	class:open
	onclick={toggle}
	aria-label={ariaLabel}
	aria-expanded={open}
>
	<span class="line"></span>
	<span class="line"></span>
	<span class="line"></span>
</button>

<style>
	.hamburger {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		padding: 20px;
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.line {
		display: block;
		width: 24px;
		height: 2px;
		background-color: white;
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	.hamburger.open .line:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.hamburger.open .line:nth-child(2) {
		opacity: 0;
	}

	.hamburger.open .line:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}
</style>
