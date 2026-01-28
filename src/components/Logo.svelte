<script lang="ts">
	export let width: string = '170';
	export let height: string = '40';
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" {width} {height} class="logo">
	<defs>
		<linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%">
				<animate
					attributeName="stop-color"
					values="#06b6d4;#a855f7;#ec4899;#06b6d4"
					dur="6s"
					repeatCount="indefinite"
				/>
			</stop>
			<stop offset="100%">
				<animate
					attributeName="stop-color"
					values="#a855f7;#ec4899;#06b6d4;#a855f7"
					dur="6s"
					repeatCount="indefinite"
				/>
			</stop>
		</linearGradient>
	</defs>

	<!-- Opening bracket -->
	<text
		x="20"
		y="55"
		font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
		font-size="42"
		font-weight="600"
		fill="url(#textGradient)"
	>{"{"}</text>

	<!-- ceal.dev as one unit -->
	<text
		x="50"
		y="55"
		font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
		font-size="42"
		font-weight="700"
		fill="url(#textGradient)">ceal.dev</text
	>

	<!-- Closing bracket -->
	<text
		x="265"
		y="55"
		font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
		font-size="42"
		font-weight="600"
		fill="url(#textGradient)">}</text
	>

	<!-- Blinking cursor at the end -->
	<rect x="300" y="18" width="3" height="40" fill="url(#textGradient)">
		<animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
	</rect>
</svg>

<style>
	.logo {
		filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3));
		transition: filter 0.3s ease;
	}

	.logo:hover {
		filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5));
	}
</style>
