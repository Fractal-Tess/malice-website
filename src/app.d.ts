/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		theme: Theme | null;
	}

	// interface Platform {}

	interface Session {
		theme: Theme | null;
	}

	// interface Stuff {}
}
