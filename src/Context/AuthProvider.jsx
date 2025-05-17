import React from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {

    // Create User
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    // User Info
    const userInfo = {
        createUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;