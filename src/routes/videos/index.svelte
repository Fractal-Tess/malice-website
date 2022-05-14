<script>
	const raids = [
		{
			name: 'Trial of Valor',
			link: '/videos/tov',
			image: '/tov.jpg'
		},
		{
			name: 'Emerald Nightmare',
			link: '/videos/en',
			image: '/en.jpg'
		}
	];
</script>

<svelte:head>
	<title>Videos</title>
	<meta name="description" content="Video" />
	<meta property="og:title" content="Videos" />
	<meta property="og:description" content="Video playlist" />
	<meta name="twitter:title" content="Videos" />
	<meta name="twitter:description" content="Video playlist" />
</svelte:head>

<div class="flex flex-col items-center">
	<ul>
		{#each raids as { name, link, image }}
			<li>
				<a
					href={link}
					class="flex flex-col my-24 lg:my-8 items-center hover:text-prime"
				>
					<h1 class=" transition-colors font-extrabold text-5xl lg:text-2xl">
						{name}
					</h1>
					<img
						src={image}
						alt="raid splash art "
						class="max-w-3xl m-8 transition-shadow rounded-2xl hover:shadow-prime shadow-lg"
					/>
				</a>
			</li>
		{/each}
	</ul>
</div>
