import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import AllProductsTable from '../AllProducts/AllProductsTable';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
        // .then(data => console.log(data.length))
    }, [user]);
    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-semibold my-10'>My Products</h1>

            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Advertized</th>
                            <th>Booked</th>
                            <th>Date Posted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(pro => <AllProductsTable key={pro._id} pro={pro}></AllProductsTable>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;