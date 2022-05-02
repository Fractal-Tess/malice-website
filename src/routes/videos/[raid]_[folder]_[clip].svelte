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

<div class="flex h-full items-center justify-center p-8">
	{#if browser}
		<VideoPlayer {source} poster="/malice-logo.jpg" borderRadius="16px" />
	{/if}
</div>
