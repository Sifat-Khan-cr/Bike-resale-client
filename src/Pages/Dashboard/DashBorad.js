import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const DashBorad = () => {
    const { user } = useContext(AuthContext);
    const [admin, setAdmin] = useState(false);
    const [seller, setSeller] = useState(false);
    const [verified, setVerified] = useState(false);



    useEffect(() => {
        fetch(`http://localhost:5000/authorization/${user?.email}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setAdmin(data[0].admin);
                setSeller(data[0].seller);
                setVerified(data[0].verified);
            })
    }, [user]);
    return (
        <div>
            <h1>this is for DashBorad{user.email}</h1>
            {
                admin && <h1>admin</h1>
            }
            {
                seller && <Link to="/dashboard/postadd">Post Add</Link>
            }
            {
                verified && <h1>verified</h1>
            }
        </div>
    );
};

export default DashBorad;