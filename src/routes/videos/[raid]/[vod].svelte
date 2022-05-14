<script lang="ts">
	import { browser } from '$app/env';

	import { page } from '$app/stores';
	import VideoPlayer from 'svelte-video-player';
	import { capitalize, raidMap } from '$lib/util/raidMap';

	const { raid, vod } = $page.params;

	const source = [`${vod}.mp4`];

	const fRaid = raidMap.get(raid);
	const cRaid = capitalize(fRaid);
</script>

<svelte:head>
	<title>{cRaid}/{vod}</title>
	<meta name="description" content="Video {cRaid}/{vod}" />
	<meta property="og:title" content="{cRaid}/{vod}" />
	<meta property="og:description" content="Video {cRaid}/{vod}" />
	<meta name="twitter:title" content="{cRaid}/{vod}" />
	<meta name="twitter:description" content="Video {cRaid}/{vod}" />
</svelte:head>

<div class="flex-1 flex flex-col justify-center items-center">
	<div class="max-w-7xl w-full px-8">
		{#if browser}
			<VideoPlayer {source} poster="/logo-bg.jpg" borderRadius="16px" />
		{/if}
	</div>
</div>
