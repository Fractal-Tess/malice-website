<script lang="ts">
	import { page } from '$app/stores';

	import type { Theme } from '../../types';
	import { setTheme, theme } from '$lib/stores/theme';
	import ThemeToggleIcon from './ThemeToggleIcon.svelte';

	$: nextTheme = ($theme === 'dark' ? 'light' : 'dark') as Theme;
	const handleThemeIconClick = () => {
		setTheme(nextTheme);
	};
</script>

<header class="flex justify-between mx-4 h-12 text-text">
	<div class="h-full w-8 relative">
		<a href="/" class="absolute h-20 w-40">
			<img
				src="/final-logo.png"
				alt="logo"
				class="h-full w-full object-contain"
			/>
		</a>
	</div>
	<nav class="flex">
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul class="flex">
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/videos'}>
				<a sveltekit:prefetch href="/videos">Videos</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
	<button
		on:click={handleThemeIconClick}
		class="transition-colors w-8 hover:text-prime"
		label="toggle theme from {$theme} to {nextTheme}"
		aria-live="polite"
	>
		<ThemeToggleIcon className="w-6" />
	</button>
</header>

<style lang="postcss">
	li {
		@apply bg-surface-light relative h-full hover:text-prime;
	}
	nav > svg {
		@apply h-full fill-surface-light;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	ul > li > a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
