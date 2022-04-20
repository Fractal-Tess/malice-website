<script lang="ts">
	import logo from '$lib/assets/malice-logo.jpg';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<img src={logo} alt="logo" />
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
