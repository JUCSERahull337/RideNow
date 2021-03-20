import React from 'react';
//import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Search.css"
import GoogleMap from '../GoogleMap/GoogleMap';

const Search = () => {
    //const {type} = useParams();
    return (
        <div>
            <div className="d-flex flex-column searchDiv">
                <div className="searchBox">
                    <h4>From</h4>
                    <input name="name" id="fromField" type="text" placeholder="Enter Your Start Location" />
                </div>
                <div className="searchBox">
                    <h4>To</h4>
                    <input name="name" id="fromField" type="text" placeholder="Enter Your End Location" />
                </div>
                <div className="searchBox">
                    <h4>Journey Start Date</h4>
                    <input name="name" id="fromField" type="date" placeholder="Enter date of starting" />
                </div>
                <div className="searchBox">
                    <h4>Journey End Date</h4>
                    <input name="name" id="fromField" type="date" placeholder="Enter date of end" />
                </div>
                <button type="button" class="btn btn-warning btn-lg searchBtn m-2 rounded-pill">Search Vehicle</button>
            </div>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Search;