<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
</script>

<svelte:head>
	<link
		rel="icon"
		type="image/svg"
		href={'https://malice.jet-black.xyz/favicon.png'}
	/>

	<meta property="og:url" content="malice.jet-black.xyz/" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="malice.jet-black.xyz" />
	<meta property="twitter:url" content="malice.jet-black.xyz/" />

	<meta
		property="og:image"
		content="https://malice.jet-black.xyz/logo-bg.jpg"
	/>
	<meta
		name="twitter:image"
		content="https://malice.jet-black.xyz:/logo-bg.jpg"
	/>
	<meta
		property="og:image"
		content="https://malice.jet-black.xyz/logo-bg.jpg"
	/>
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<div
	class="{$theme}
	flex flex-col 
	min-w-full
	min-h-screen
	bg-surface-dark
	text-text
	text-4xl lg:text-xl"
>
	<Header />

	<div class="flex-1 p-8">
		<slot />
	</div>

	<footer class="flex flex-col items-center py-8 mt-auto">
		<p>
			This is verison <span
				><a href="/#" class="underline text-prime">0.2</a></span
			> of Malice file/video server
		</p>
	</footer>
</div>
