import React, { createContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import App from '../../Firebase/Firebase.config'

export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();
    const auth = getAuth(App);


    const googleHandler = () => {
        setLoading(true)
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                // console.log(result.user);
                const user = result.user;
                const userData = { name: user.displayName, photo: user.photoURL, email: user.email, password: null, seller: false, admin: false };
                // fetch("http://localhost:5000/setUser", {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(userData)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         // console.log(data)
                //     })
            })
            .catch(error => console.error(error))
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updataUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log(user);
            setLoading(false);
        });
        return () => {
            unsubcribe();
        }
    }, [])

    const authInfo = { user, loading, googleHandler, logOut, createUser, login, updataUserProfile };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;