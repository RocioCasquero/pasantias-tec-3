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

	const googleSignIn = async () => {
		setAuthLoading(true);
		try {
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
			setAuthLoading(false);
		} catch (error) {
			setAuthLoading(false);
			throw error;
		}
	};

	const emailSignIn = async (email, password) => {
		setAuthLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setAuthLoading(false);
		} catch (error) {
			setAuthLoading(false);
			throw error;
		}
	};

	const logOut = async () => {
		setAuthLoading(true);
		try {
			await signOut(auth);
			setAuthLoading(false);
		} catch (error) {
			setAuthLoading(false);
			throw error;
		}
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
