<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<img src="malice-logo.jpg" alt="Welcome" />
	<h1>For now, there isn't much to see here...</h1>
	<h2>Maybe you want to go to <span><a href="/videos"> videos</a></span>?</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	img {
		width: 50%;
		display: block;
		border-radius: 1rem;
	}
</style>
