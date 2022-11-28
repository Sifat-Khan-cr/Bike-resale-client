import React, { useEffect, useState } from 'react';
import AllSellerTable from '../AllSeller/AllSellerTable';
// import AllSellerTable from './AllSellerTable'



const AllBuyer = () => {
    const [products, setProducts] = useState([]);
    const buyer = true;
    useEffect(() => {
        fetch('http://localhost:5000/buyer')
            .then(res => res.json())
            .then(data => setProducts(data))
        // .then(data => console.log(data.length))
    }, []);
    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-semibold my-10'>All Buyers</h1>

            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(pro => <AllSellerTable key={pro._id} pro={pro} buyer={buyer}></AllSellerTable>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;