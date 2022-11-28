import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const DashBoradNav = () => {
    const { user } = useContext(AuthContext);
    const [admin, setAdmin] = useState(false);
    const [seller, setSeller] = useState(false);
    const [verified, setVerified] = useState(false);



    useEffect(() => {
        fetch(`https://sifat-bikes-server.vercel.app/authorization/${user?.email}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setAdmin(data[0].admin);
                setSeller(data[0].seller);
                setVerified(data[0].verified);
            })
    }, [user]);
    return (
        <div className='flex flex-row justify-center mt-10 mb-5'>
            {
                (!seller && !admin) && <><button className="btn btn-sm mx-3 btn-primary"><Link to={'#'}>My Orders</Link></button>
                    <button className="btn btn-sm mx-3 btn-primary"><Link to={'/dashboard/allproducts'}>ALL Products</Link></button></>

            }
            {
                seller && <>
                    <button className="btn btn-sm mx-3 btn-primary"><Link to={'/dashboard/postadd'}>Add Product</Link></button>
                    <button className="btn btn-sm mx-3 btn-primary"><Link to={'/dashboard/myproducts'}>My Products</Link></button>
                </>
            }
            {
                admin && <>
                    <button className="btn btn-sm mx-3 btn-primary"><Link to={'/dashboard/allseller'}>All Sellers</Link></button>
                    <button className="btn btn-sm mx-3 btn-primary"><Link to={'/dashboard/allbuyer'}>All Buyers</Link></button>
                </>
            }

        </div>
    );
};

export default DashBoradNav;