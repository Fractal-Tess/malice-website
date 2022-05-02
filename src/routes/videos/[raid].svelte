<script lang="ts">
	import type { VideosFileStructure } from 'src/types';
	import { page } from '$app/stores';
	import { capitalize, raidMap } from '$lib/util/raidMap';
	export let vfsArray: VideosFileStructure[];
	const { raid } = $page.params;

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

<div class="flex flex-col items-center h-full overflow-y-auto">
	<img
		src="/{raid}.jpg"
		alt="raid splash art "
		class="w-3/4 h-2/5 object-cover transition-shadow rounded-2xl shadow-prime shadow-lg"
	/>
	{#each vfsArray as { folderName, uncutFile, cutFiles }}
		<div class="mt-9 flex flex-col">
			<h1 class="text-prime font-extrabold text-2xl">{folderName}</h1>
		</div>
		<div class="flex flex-col items-center">
			<div class="flex gap-2 my-4 flex-wrap">
				{#each cutFiles as cutFile, i}
					<a
						href="{raid}_{folderName}_{cutFile.substring(
							0,
							cutFile.lastIndexOf('.')
						)}"
						class="bg-prime rounded-lg w-6 text-center">{i}</a
					>
				{/each}
			</div>
			<div>
				<a
					href="{raid}_{folderName}_{uncutFile.substring(
						0,
						uncutFile.lastIndexOf('.')
					)}"
					class="bg-secondary rounded-md p-1">Uncut video</a
				>
			</div>
		</div>
	{/each}
	<div />
</div>
