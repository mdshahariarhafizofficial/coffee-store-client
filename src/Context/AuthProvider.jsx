import React from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {

    // Create User
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // SingIn user
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // User Info
    const userInfo = {
        createUser,
        singInUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;