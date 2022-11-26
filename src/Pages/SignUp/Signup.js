import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, googleHandler, loading } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const seller = form.seller.checked;
        const userData = { name: name, email: email, password: password, seller: seller, admin: false, photo: null }
        console.log(userData);
        // return;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                // console.log(user);
            })
            .catch(err => console.log(err));



        fetch("http://localhost:5000/setUser", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })
    }


    return (
        <div>
            {loading && <h1 className='text-6xl text-center'>Loading......</h1>}
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src="https://i.ibb.co/p4kR5fp/contact.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Sign up as a seller</span>
                                    <input type="checkbox" name='seller' className="checkbox checkbox-primary" />
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                        <button onClick={googleHandler} className="btn btn-secondary w-4/5 mx-auto mt-5">Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;