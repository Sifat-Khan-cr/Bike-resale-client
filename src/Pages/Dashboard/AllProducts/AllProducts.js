import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProductsTable from './AllProductsTable';

const AllProducts = () => {
    const products = useLoaderData();

    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-semibold my-10'>All Products</h1>

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

export default AllProducts;