<script lang="ts">
	import { capitalize, raidMap } from '$lib/util/raidMap';
	import type { Vods } from 'src/types';

	export let vods: Vods;
	export let raid: 'en' | 'tov';

	const fRaid = raidMap.get(raid);
	const cRaid = capitalize(fRaid);
</script>

<svelte:head>
	<title>{cRaid}</title>
	<meta name="description" content="Video playlist of {cRaid}" />
	<meta property="og:title" content="{cRaid} videos" />
	<meta property="og:description" content="Video playlist of {cRaid}" />
	<meta name="twitter:title" content="{cRaid} videos" />
	<meta name="twitter:description" content="Video playlist of {cRaid}" />
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class=" transition-colors font-extrabold text-5xl lg:text-2xl">
		{cRaid}
	</h1>
	<img
		src="/{raid}.jpg"
		alt="raid splash art"
		class="mt-12 lg:mt-4 max-w-3xl w-fulltransition-shadow rounded-2xl shadow-prime shadow-lg"
	/>
	<ul class="mt-16  text-center">
		{#each vods as vod}
			<li class="my-24 lg:my-8">
				<a href={vod.pathname} class="bg-prime rounded-lg p-8 lg:p-2"
					>{vod.name}</a
				>
			</li>
		{/each}
	</ul>
</div>
