import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import CategoryCard from './CategoryCard/CategoryCard';

const Home = () => {
    const category = useLoaderData();
    const [advertized, setAdvertized] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/advertized')
            .then(res => res.json())
            .then(data => setAdvertized(data))
        // .then(data => console.log(data.length))
    }, []);


    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-semibold mt-10'>Bikes Categories</h1>
            <div className='grid my-10 mx-auto lg:grid-cols-3 w-4/5'>
                {
                    category.map(cat => <CategoryCard key={cat._id} cat={cat}></CategoryCard>)
                }
            </div>
            {
                advertized.length && <>
                    <h1 className='text-4xl text-center text-primary font-semibold mt-10'>Advertized Products</h1>
                    <div className='grid my-10 mx-auto lg:grid-cols-3 w-4/5'>
                        {
                            advertized.map(dat => <ProductCard key={dat._id} dat={dat}></ProductCard>)
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default Home;