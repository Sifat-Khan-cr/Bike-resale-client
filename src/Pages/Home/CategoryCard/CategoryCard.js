import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ cat }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64' src={cat.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cat.category_name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/products/${cat.category_id}`}>Show All</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;