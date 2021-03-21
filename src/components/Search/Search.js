import React from 'react';
import { useHistory,useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Search.css"
import vehicle from '../../vehicle/vehicle.json'



const Search = () => {
    const {type} = useParams();
    let ride;

     vehicle.map(vehicle => {
        
        if(vehicle.Name === type) {
            ride = vehicle.Name;
        }
    })
    const history = useHistory();
    //const {type} = useParams();
    const resultPage = rideOption =>{
        const url= `/vehicleCard/${rideOption}`;
        history.push(url);
        console.log('gffsfdafa');
        
    }
    return (
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center searchDiv">
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
                <button type="button" onClick={() => resultPage(ride)} class="btn btn-warning btn-lg searchBtn m-2 rounded-pill">Search Vehicle</button>
            </div>
           
        </div>
    );
};

export default Search;