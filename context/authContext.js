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
	const [authLoading, setAuthLoading] = useState(false);
	const [authError, setAuthError] = useState(null);

	const googleSignIn = async () => {
		setAuthError(null);

		try {
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
		} catch (error) {
			setAuthError(error);
		}
	};

	const emailSignIn = async (email, password) => {
		setAuthError(null);

		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			setAuthError(error);
		}
	};

	const logOut = async () => {
		setAuthError(null);

		try {
			await signOut(auth);
		} catch (error) {
			setAuthError(error);
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
		});

		return () => {
			setAuthLoading(true);
			unsubscribe();
			setAuthLoading(false);
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
