<script lang="ts">
	import { onMount } from 'svelte';
	import type { User } from 'firebase/auth';
	import {
		FirebaseAuthError,
		sendVerificationEmail,
		signInWithEmail,
		signInWithGoogle,
		signOutUser,
		signUpWithEmail,
		subscribeToAuthState
	} from '$lib/firebase/auth.client';

	let email = $state('');
	let password = $state('');
	let user: User | null = $state(null);
	let message = $state('');
	let busy = $state(false);

	onMount(() => subscribeToAuthState((currentUser) => (user = currentUser)));

	async function run(action: () => Promise<unknown>, success: string) {
		busy = true;
		message = '';

		try {
			await action();
			message = success;
		} catch (error) {
			message = error instanceof FirebaseAuthError ? `${error.code}: ${error.message}` : 'Authentication failed';
		} finally {
			busy = false;
		}
	}

	function verifyEmail() {
		const currentUser = user;
		return currentUser
			? run(() => sendVerificationEmail(currentUser), 'Verification email sent')
			: undefined;
	}
</script>

<svelte:head><title>Firebase Auth Test</title></svelte:head>

<main class="mx-auto grid min-h-screen max-w-lg content-center gap-6 p-6">
	<header>
		<p class="font-semibold text-amber-700">Temporary development page</p>
		<h1 class="text-3xl font-bold">Firebase Auth Test</h1>
	</header>

	<section class="rounded-lg border p-4">
		<h2 class="font-semibold">Current user</h2>
		{#if user}
			<p>{user.email ?? user.displayName ?? user.uid}</p>
			<p>Email verified: <strong>{user.emailVerified ? 'yes' : 'no'}</strong></p>
		{:else}
			<p>Signed out</p>
		{/if}
	</section>

	<form
		class="grid gap-3"
		onsubmit={(event) => {
			event.preventDefault();
			return run(() => signInWithEmail(email, password), 'Signed in');
		}}
	>
		<label class="grid gap-1">
			<span>Email</span>
			<input class="rounded border px-3 py-2" type="email" bind:value={email} required />
		</label>
		<label class="grid gap-1">
			<span>Password</span>
			<input class="rounded border px-3 py-2" type="password" bind:value={password} minlength="6" required />
		</label>
		<div class="flex flex-wrap gap-2">
			<button class="rounded bg-black px-4 py-2 text-white disabled:opacity-50" type="submit" disabled={busy}>Sign in</button>
			<button
				class="rounded border px-4 py-2 disabled:opacity-50"
				type="button"
				disabled={busy}
				onclick={() => run(() => signUpWithEmail(email, password), 'Account created')}>Create account</button
			>
		</div>
	</form>

	<button
		class="rounded border px-4 py-2 disabled:opacity-50"
		disabled={busy}
		onclick={() => run(signInWithGoogle, 'Signed in with Google')}>Sign in with Google</button
	>

	<div class="flex flex-wrap gap-2">
		<button
			class="rounded border px-4 py-2 disabled:opacity-50"
			disabled={busy || !user || user.emailVerified}
			onclick={verifyEmail}
			>Send verification email</button
		>
		<button
			class="rounded border px-4 py-2 disabled:opacity-50"
			disabled={busy || !user}
			onclick={() => run(signOutUser, 'Signed out')}>Sign out</button
		>
	</div>

	{#if message}<p aria-live="polite" class="rounded bg-slate-100 p-3">{message}</p>{/if}
</main>
