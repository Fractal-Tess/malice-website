<script lang="ts">
	import { browser } from '$app/env';

	import { page } from '$app/stores';
	import VideoPlayer from 'svelte-video-player';
	import { capitalize, raidMap } from '$lib/util/raidMap';

	const { raid, folder, clip } = $page.params;

	const source = [
		`${raid}/${folder}/${clip}.webm`,
		`${raid}/${folder}/${clip}.mkv`,
		`${raid}/${folder}/${clip}.mp4`
	];

	const fRaid = raidMap.get(raid);
	const cRaid = capitalize(fRaid);
</script>

<svelte:head>
	<title>{cRaid}/{folder}/{clip}</title>
	<meta name="description" content="Video {cRaid}/{folder}/{clip}" />
	<meta property="og:title" content="{cRaid}/{folder}/{clip}" />
	<meta property="og:description" content="Video {cRaid}/{folder}/{clip}" />
	<meta name="twitter:title" content="{cRaid}/{folder}/{clip}" />
	<meta name="twitter:description" content="Video {cRaid}/{folder}/{clip}" />
</svelte:head>

<div class="flex h-full items-center justify-center p-8">
	{#if browser}
		<VideoPlayer {source} poster="/logo-bg.jpg" borderRadius="16px" />
	{/if}
</div>
