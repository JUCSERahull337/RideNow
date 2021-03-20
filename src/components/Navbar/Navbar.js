import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="d-flex justify-content-between p-3">
            <div className="appName">
                <h3>RideNow</h3>
            </div>
            <div className="d-flex flex-row mb-3 navLink">
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/search"><h4>Destination</h4></Link>
                <Link><h4>Contact Us</h4></Link>
                <Link to="/login"><button className=" btn btn-warning navBtn">Login</button></Link>
            </div>
            
        </div>
    );
};

export default Navbar;