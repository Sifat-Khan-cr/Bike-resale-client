import React, { useEffect, useState } from 'react';
import AllProductsTable from './AllProductsTable';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        // .then(data => console.log(data.length))
    }, []);
    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-semibold my-10'>All Products{products.length}</h1>

            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Seller Name</th>
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