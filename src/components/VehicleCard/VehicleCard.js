import React from 'react';
import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VehicleCard.css';
import vehicle from '../../vehicle/vehicle.json';

const VehicleCard = () => {
    const {ride} = useParams();
    let rideOption = ride;
    let rideName, rideImg;

    vehicle.map(vehicle => {
        if(vehicle.Name === rideOption) {
            rideName = vehicle.Name;
            rideImg = vehicle.imgUrl;
        }
    })
    return (
        <div className="d-flex justify-content-between showComponent">
        <div className="placeAndPrice">
            <div className="placeName">
                <p>From : {}</p>
                <p>To   : {}</p>
            </div>
            <div className="d-flex justify-content-around pricePart">
                <img src={rideImg} alt='No img found' className="image-fluid"/>
                <div className="d-flex flex-column priceBox">
                    <p>{rideName}</p>
                    <p>100 Taka</p>
                </div>
            </div>
        </div>
        <div className="mapBox">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.049644099905!2d90.3781836249269!3d23.746494238365205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0e848958f%3A0xd56e2e3180c6a3ce!2sKalabagan%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1616325753856!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
    );
};

export default VehicleCard;