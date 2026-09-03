import { FirebaseError } from 'firebase/app';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	type Unsubscribe,
	type User,
	type UserCredential
} from 'firebase/auth';
import { firebaseApp } from './client';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export class FirebaseAuthError extends Error {
	readonly code: string;

	constructor(error: unknown) {
		super(error instanceof Error ? error.message : 'Firebase authentication failed', {
			cause: error
		});
		this.name = 'FirebaseAuthError';
		this.code = error instanceof FirebaseError ? error.code : 'auth/unknown';
	}
}

async function runAuthOperation<T>(operation: () => Promise<T>): Promise<T> {
	try {
		return await operation();
	} catch (error) {
		throw new FirebaseAuthError(error);
	}
}

export function signUpWithEmail(email: string, password: string): Promise<UserCredential> {
	return runAuthOperation(() => createUserWithEmailAndPassword(auth, email, password));
}

export function signInWithEmail(email: string, password: string): Promise<UserCredential> {
	return runAuthOperation(() => signInWithEmailAndPassword(auth, email, password));
}

export function signInWithGoogle(): Promise<UserCredential> {
	return runAuthOperation(() => signInWithPopup(auth, googleProvider));
}

export function signOutUser(): Promise<void> {
	return runAuthOperation(() => signOut(auth));
}

export function sendVerificationEmail(user: User): Promise<void> {
	return runAuthOperation(() => sendEmailVerification(user));
}

export function getCurrentUser(): User | null {
	return auth.currentUser;
}

export function subscribeToAuthState(callback: (user: User | null) => void): Unsubscribe {
	return onAuthStateChanged(auth, callback);
}
