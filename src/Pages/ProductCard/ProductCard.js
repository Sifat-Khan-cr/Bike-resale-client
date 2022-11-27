import React from 'react';

const ProductCard = ({ dat }) => {
    console.log(dat);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={dat.productPhoto} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {dat.productName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;