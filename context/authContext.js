import { useContext, createContext, useState, useEffect } from 'react';
import {
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../services/firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authLoading, setAuthLoading] = useState(true);
	const [authError, setAuthError] = useState(null);

	const googleSignIn = async () => {
		setAuthError(null);
		setAuthLoading(true);

		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider).catch(() => setAuthError(error));

		setAuthLoading(false);
	};

	const emailSignIn = async (email, password) => {
		setAuthError(null);
		setAuthLoading(true);

		await signInWithEmailAndPassword(auth, email, password).catch(() =>
			setAuthError(error)
		);

		setAuthLoading(false);
	};

	const logOut = async () => {
		setAuthError(null);
		setAuthLoading(true);

		await signOut(auth).catch(() => setAuthError(error));

		setAuthLoading(false);
	};

	useEffect(() => {
		setAuthLoading(true);

		const authLoadingTimer = setTimeout(() => {
			setAuthLoading(false);
		}, 1000);

		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
		});

		return () => {
			clearTimeout(authLoadingTimer);
			unsubscribe();
		};
	}, [user]);

	return (
		<AuthContext.Provider
			value={{
				user,
				authLoading,
				authError,
				emailSignIn,
				googleSignIn,
				logOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
