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

<header class="relative flex justify-between px-4 h-32 lg:h-12 font-extrabold">
	<a href="/">
		<img src="/logo-t.png" alt="logo" class="h-32 lg:h-16" />
	</a>
	<nav class="flex absolute left-1/2 -translate-x-1/2 h-full">
		<svg viewBox="0 0 2 3" aria-hidden="true" class="h-full fill-surface-light">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul class="flex">
			<li
				class="bg-surface-light relative h-full hover:text-prime"
				class:active={$page.url.pathname === '/'}
			>
				<a class="h-full items-center flex px-4" sveltekit:prefetch href="/"
					>Home</a
				>
			</li>
			<li
				class="bg-surface-light relative h-full hover:text-prime"
				class:active={$page.url.pathname === '/videos'}
			>
				<a
					class="h-full  items-center flex px-4"
					sveltekit:prefetch
					href="/videos">Videos</a
				>
			</li>
		</ul>
		<svg
			viewBox="0 0 2 3"
			aria-hidden="true"
			class="h-full fill-surface-light m-0 p"
		>
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="flex justify-end items-center ">
		<button
			on:click={handleThemeIconClick}
			class="transition-colors hover:text-prime pr-12 "
			label="toggle theme from {$theme} to {nextTheme}"
			aria-live="polite"
		>
			<ThemeToggleIcon cssClass={'w-20 lg:w-8'} />
		</button>
	</div>
</header>
