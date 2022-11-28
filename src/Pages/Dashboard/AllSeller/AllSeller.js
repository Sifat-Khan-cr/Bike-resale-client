import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSellerTable from './AllSellerTable';



const AllSeller = () => {
    const products = useLoaderData();
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