import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ShowCategory = () => {
    const data = useLoaderData();
    let category = "";
    if (data[0].category === "01") {
        category = "Bikes";
    } else if (data[0].category === "03") {
        category = "Scooter";
    } else {
        category = "E-Bikes";
    }
    // console.log(category);
    return (

        <div>
            <h1 className='text-4xl text-center text-primary font-semibold mt-10'>All {category}</h1>

            <div className='grid my-10 mx-auto lg:grid-cols-2 w-4/5'>
                {
                    data.map(dat => <ProductCard key={dat._id} category={category} dat={dat}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ShowCategory;