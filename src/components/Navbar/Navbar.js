import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    console.log(loggedInUser.name)
    return (
        <div className=" container-fluid  d-flex justify-content-between p-3 homeDiv">
            <div className="appName">
                <h3>RideNow</h3>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3 navLink">
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/login"><h4>Destination</h4></Link>
                <Link><h4>Contact Us</h4></Link>
                {
                    loggedInUser.email ?<p className='userName'>{loggedInUser.email}</p> :
                    <Link to="/login"><button className=" btn btn-warning navBtn">Login</button></Link>
                }
               
            </div>
            
        </div>
    );
};

export default Navbar;