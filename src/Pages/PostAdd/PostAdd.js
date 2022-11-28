import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PostAdd = () => {
    const notify = () => toast('Here is your toast.');
    const date = new Date();
    const { user } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const productName = form.productName.value;
        const newPrice = form.newPrice.value;
        const askingPrice = form.askingPrice.value;
        const usageYear = form.usageYear.value;
        const postDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

        let category = "";
        if (form.category.value === "Bike") {
            category = "01";
        } else if (form.category.value === "E-Bike") {
            category = "02";
        } else {
            category = "03";

        }
        const picture = form.picture.files[0];
        const formData = new FormData();
        formData.append('image', picture);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`;
        fetch(url, {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const productData = { productName: productName, category: category, location: location, newPrice: newPrice, askingPrice: askingPrice, usageYear: usageYear, sellerName: name, sellerEmail: email, productPhoto: data.data.display_url, advertized: false, booked: false, sellerVerified: false, postDate: postDate };
                form.reset();
                // console.log(productData)
                fetch("https://sifat-bikes-server.vercel.app/products", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productData)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.acknowledged) {
                            toast.success("Posted Succesfully")
                        }
                    })


            })







    }
    return (
        <div>
            <h1 className='text-4xl text-center text-primary font-semibold mt-10'>Post Your Add</h1>
            <form onSubmit={handleSignUp} className="card-body w-6/12 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name='productName' placeholder='Enter your product name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Select Category</span>
                    </label>
                    <select name='category' className="select select-primary w-full">
                        <option disabled defaultValue={"Bike"}>Select Your Products category</option>
                        <option>Bike</option>
                        <option>E-Bike</option>
                        <option>Scooter</option>
                    </select>                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Showroom Price $</span>
                    </label>
                    <input type="text" name='newPrice' placeholder='Enter Showroom Price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Asking Price $</span>
                    </label>
                    <input type="text" name='askingPrice' placeholder='Enter Your Asking Price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Usage Year</span>
                    </label>
                    <input type="text" name='usageYear' placeholder='Enter Usage Year' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name='location' placeholder='Enter Your Location' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture</span>
                    </label>
                    <input type="file" name='picture' className="file-input file-input-bordered file-input-primary w-full" />
                </div>









                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="text" name='email' defaultValue={user?.email} className="input input-bordered" readOnly />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary w-6/12 mx-auto" type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default PostAdd;