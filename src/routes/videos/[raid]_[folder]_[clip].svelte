<script>
	import { browser } from '$app/env';

	import { page } from '$app/stores';
	import VideoPlayer from 'svelte-video-player';

	const { raid, folder, clip } = $page.params;

	const source = [
		`${raid}/${folder}/${clip}.webm`,
		`${raid}/${folder}/${clip}.mkv`,
		`${raid}/${folder}/${clip}.mp4`
	];
</script>

<svelte:head>
	<title>{raid}/{folder}/{clip}/</title>
	<meta
		name="description"
		content="A video clip of raid:{raid}, recorded at:{folder}, clip:{clip}"
	/>

	<meta property="og:title" content="{raid}/{folder}/{clip}" />
	<meta property="og:url" content="malice.jet-black.xyz/" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="Video playlist" />
	<meta
		property="og:image"
		content="https://malice.jet-black.xyz/logo-bg.jpg"
	/>

	<meta name="twitter:title" content="{raid}/{folder}/{clip}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="malice.jet-black.xyz" />
	<meta property="twitter:url" content="malice.jet-black.xyz/" />
	<meta name="twitter:description" content="Video playlist" />
	<meta
		name="twitter:image"
		content="https://malice.jet-black.xyz:/logo-bg.jpg"
	/>
</svelte:head>

<div class="flex h-full items-center justify-center p-8">
	{#if browser}
		<VideoPlayer {source} poster="/logo-bg.jpg" borderRadius="16px" />
	{/if}
</div>
