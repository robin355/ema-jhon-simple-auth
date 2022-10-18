import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/Firebase.init';
const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [user, setUser] = useState('null');
    const [loading, setloading] = useState(true)
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        setloading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("currentUser", currentUser)
            setUser(currentUser);
            setloading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, createUser, signIn, Logout, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;