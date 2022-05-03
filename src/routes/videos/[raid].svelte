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

<div class="flex flex-col items-center h-full">
	<img
		src="/{raid}.jpg"
		alt="raid splash art "
		class="w-3/4 h-2/5 object-cover transition-shadow rounded-2xl shadow-prime shadow-lg"
	/>
	{#each vfsArray as { folderName, uncutFile, cutFiles }}
		<div class="mt-9 flex flex-col">
			<h1 class="text-prime font-extrabold text-4xl lg:text-2xl">
				Session {folderName}
			</h1>
		</div>
		<div class="flex flex-col items-center w-2/3 gap-12 lg:gap-6">
			<div class="flex gap-12 lg:gap-4 mt-4 flex-wrap justify-center ">
				{#if Array.isArray(cutFiles) && cutFiles.length > 0}
					{#each cutFiles as cutFile, i}
						<a
							href="{raid}_{folderName}_{cutFile.substring(
								0,
								cutFile.lastIndexOf('.')
							)}"
							class="bg-prime rounded-lg px-12 py-4 lg:py-0 lg:px-4 text-center"
							>{i}</a
						>
					{/each}
				{:else}
					<h1 class="text-center">
						Sorry... there is no content for this session.. =(
					</h1>
				{/if}
			</div>

			{#if uncutFile}
				<div>
					<a
						href="{raid}_{folderName}_{uncutFile.substring(
							0,
							uncutFile.lastIndexOf('.')
						)}"
						class="bg-secondary rounded-lg px-12 py-4 lg:py-2 lg:px-4"
						>Uncut video</a
					>
				</div>
			{/if}
		</div>
	{/each}
	<div />
</div>
