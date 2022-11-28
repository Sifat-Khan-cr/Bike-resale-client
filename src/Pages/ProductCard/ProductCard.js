import React from 'react';

const ProductCard = ({ dat, setBike }) => {
    const { productPhoto, productName, location, newPrice, askingPrice, usageYear, sellerName, sellerEmail, sellerVerified, postDate, booked } = dat;
    // console.log(dat);
    return (
        <div className="card w-96 bg-base-100 shadow-lg mb-10">
            <figure><img className='h-64' src={productPhoto} alt="Product" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productName}
                    {
                        sellerVerified && <div className="badge badge-secondary">VERIFIED</div>
                    }
                    {
                        booked && <div className="badge badge-primary">Booked</div>
                    }

                </h2>
                <p className='text-sm'>Posted : {postDate}</p>
                <p >Posted By : {sellerName}</p>
                <p >Email : {sellerEmail}</p>
                <p >Showroom Price : ${newPrice}</p>
                <p >Asking Price : ${askingPrice}</p>
                <p >Used : {usageYear} year</p>
                <p >Location : {location}</p>
            </div>
            <label onClick={() => setBike(dat)} htmlFor="bike-modal" className={`btn btn-primary w-6/12 mx-auto my-5`}>{booked ? "Already Booked" : "Book Now"}</label>
        </div>
    );
};

export default ProductCard;