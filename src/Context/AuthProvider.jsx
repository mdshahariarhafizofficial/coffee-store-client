import React from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const name = "Jakir";
    const userInfo = {
        name,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;