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
            {
                data.map(dat => <ProductCard key={dat._id} category={category} dat={dat}></ProductCard>)
            }
        </div>
    );
};

export default ShowCategory;