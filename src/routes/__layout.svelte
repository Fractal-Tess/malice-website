<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="main">
	<header />

	<div class="content">
		<slot />
	</div>

	<footer>
		<p>This is verison <span><a href="#">0.1</a></span> of Malice/Mircle file server</p>
	</footer>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: start;
		max-width: 100vw;
		min-height: 100vh;
	}
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-self: end;
		flex-direction: column;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
