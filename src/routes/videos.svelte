<script>
	import { browser } from '$app/env';
	import logo from '$lib/assets/malice-logo.jpg';
	import VideoPlayer from 'svelte-video-player';

	const vod1 = 'https://frontier.jet-black.xyz/vod1.mp4';
	const vod2 = 'https://frontier.jet-black.xyz/vod2.mp4';
	const vod3 = 'https://frontier.jet-black.xyz/vod3.mp4';
</script>

{#if browser}
	<div>
		<h2>2022-04-17</h2>
		<VideoPlayer poster={logo} source={vod1} />
	</div>

	<div>
		<h2>2022-04-16</h2>
		<VideoPlayer poster={logo} source={vod2} />
	</div>
	<div>
		<h2>2022-04-09</h2>
		<VideoPlayer poster={logo} source={vod3} />
	</div>
{/if}
