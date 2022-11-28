import React, { useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import { AuthContext } from '../AuthProvider';

export const AuthorizationContext = createContext();




const Authorization = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [admin, setAdmin] = useState(false);
    const [seller, setSeller] = useState(false);
    const [verified, setVerified] = useState(false);



    useEffect(() => {
        fetch(`http://localhost:5000/authorization/:${user?.email}`)
            .then(res => res.json())
            // .then(data => setAdvertized(data))
            .then(data => console.log(data))
    }, [user]);











    const autorizationInfo = { admin, seller, verified };

    return (
        <div>
            <Authorization.provider value={autorizationInfo}>
                {children}
            </Authorization.provider>

        </div>
    );
};

export default Authorization;