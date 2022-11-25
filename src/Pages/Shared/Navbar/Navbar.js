import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl lg:text-3xl">Sifat bikes</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">


                    <button className="btn  btn-secondary my-3"><li><Link to={"/login"}>Login</Link></li></button>
                    <button className="btn btn-outline btn-secondary my-3 ml-2"><li><Link to={"/signup"}>Signup</Link ></li></button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;