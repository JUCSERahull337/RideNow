// import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { useHistory } from 'react-router';


const Home = (props) => {

    const {Name, imgUrl} = props.vehicle;

    const history = useHistory();

    const searchOption = type => {
        const url = `/${type}/search`;
        history.push(url);
    }

    return (
        <div className="">
            <div className="d-flex flex-column vehicles">
                 <img src={imgUrl} alt="No image found" />
                <button onClick={ () => searchOption(Name)} className="btn btn-warning m-3">{Name}</button>
            </div>
        </div>
    );
};

export default Home;