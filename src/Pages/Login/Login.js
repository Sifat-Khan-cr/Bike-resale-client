import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Login = () => {

    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";



    const navigate = useNavigate();

    const { googleHandler, login, loading } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                // navigate(from, { replace: true });
            })
            .then(error => console.log(error));
    }

    return (
        <div>
            {loading && <h1 className='text-6xl text-center'>Loading......</h1>}


            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src="https://i.ibb.co/yXXDWgv/04086f4b8b394ba7bdaa.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to Sifat Lawyer <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                        <button onClick={googleHandler} className="btn btn-secondary w-4/5 mx-auto mt-5">Google</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;