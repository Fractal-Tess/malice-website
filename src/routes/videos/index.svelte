<svelte:head>
	<title>Videos</title>
	<meta name="description" content="Video" />

	<meta property="og:title" content="Videos" />
	<meta property="og:url" content="malice.jet-black.xyz/" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="Video playlist" />
	<meta
		property="og:image"
		content="https://malice.jet-black.xyz/logo-bg.jpg"
	/>

	<meta name="twitter:title" content="Videos" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="malice.jet-black.xyz" />
	<meta property="twitter:url" content="malice.jet-black.xyz/" />
	<meta name="twitter:description" content="Video playlist" />
	<meta
		name="twitter:image"
		content="https://malice.jet-black.xyz:/logo-bg.jpg"
	/>
</svelte:head>

<div class="h-full flex flex-col items-center">
	<a
		href="/videos/tov"
		class="max-w-[868px] flex flex-col m-8 items-center hover:text-prime "
	>
		<h1 class=" transition-colors font-extrabold text-2xl">Trial of Valor</h1>
		<img
			src="/tov.jpg"
			alt="raid splash art "
			class="w-2/3 m-8 transition-shadow rounded-2xl hover:shadow-prime shadow-lg"
		/>
	</a>
	<a
		href="/videos/en"
		class="max-w-[868px] flex flex-col m-8 items-center hover:text-prime "
	>
		<h1 class=" transition-colors font-extrabold text-2xl">
			Emerald Nightmare
		</h1>
		<img
			src="en.jpg"
			alt="raid splash art "
			class="w-2/3 m-8 transition-shadow rounded-2xl hover:shadow-prime shadow-lg"
		/>
	</a>
</div>
