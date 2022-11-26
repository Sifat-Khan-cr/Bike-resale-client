import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard/CategoryCard';

const Home = () => {
    const category = useLoaderData();


    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-semibold mt-10'>Bikes Categories</h1>
            <div className='grid my-10 mx-auto lg:grid-cols-3 w-4/5'>
                {
                    category.map(cat => <CategoryCard key={cat._id} cat={cat}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Home;