import React, { useEffect, useState } from 'react';
import AllSellerTable from './AllSellerTable';



const AllSeller = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/seller')
            .then(res => res.json())
            .then(data => setProducts(data))
        // .then(data => console.log(data.length))
    }, []);
    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-semibold my-10'>All Seller</h1>

            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>verified</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(pro => <AllSellerTable key={pro._id} pro={pro}></AllSellerTable>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;