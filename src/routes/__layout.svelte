<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={'/favicon.png'} />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Home</title>
	<meta name="description" content="Malice's humble video file server" />

	<meta property="og:title" content="Home" />
	<meta property="og:url" content="malice.jet-black.xyz/" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="Malice file server" />
	<meta
		property="og:image"
		content="https://malice.jet-black.xyz/malice-logo.jpg"
	/>

	<meta name="twitter:title" content="Home" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="malice.jet-black.xyz" />
	<meta property="twitter:url" content="malice.jet-black.xyz/" />
	<meta name="twitter:description" content="Malice file server" />
	<meta
		name="twitter:image"
		content="https://malice.jet-black.xyz:/malice-logo.jpg"
	/>
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<div
	class="{$theme}
	flex flex-col 
	min-w-full
	h-screen
	bg-surface-dark
	text-text"
>
	<Header />

	<div class="flex-1 overflow-auto p-8">
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
