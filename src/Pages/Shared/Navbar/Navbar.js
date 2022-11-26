import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }
    // console.log(user);
    return (
        <div>

            <div className="navbar bg-primary text-primary-content">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost normal-case text-xl lg:text-3xl">Sifat bikes</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <button className="btn  btn-secondary my-3 mr-3"><li><Link to={"/blog"}>Blog</Link></li></button>
                        <button className="btn  btn-secondary my-3 mr-3"><li><Link to={"/postadd"}>Post Add</Link></li></button>
                        {

                            user?.email ? <>
                                {/* <li>{user.displayName}</li> */}
                                <div className="avatar">
                                    <div className="w-16 rounded-full mr-4">
                                        <img src={user.photoURL} alt="user" />
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className="btn  btn-secondary my-3"><li><Link>Logout</Link></li></button>
                            </>
                                :
                                <>
                                    <button className="btn  btn-secondary my-3"><li><Link to={"/login"}>Login</Link></li></button>
                                    <button className="btn btn-outline btn-secondary my-3 ml-2"><li><Link to={"/signup"}>Signup</Link ></li></button>
                                </>
                        }



                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;