// import logo from './logo.svg';
// import './App.css';
//import React from "react";
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Search from "./components/Search/Search";
import vehicle from "./vehicle/vehicle.json";
 export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser]= useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
        <Navbar></Navbar>
          <Switch>
          <Route path="/home">
              <Home></Home>
              </Route>
              <Route path="/login">
                <div className="m-5 p-5">
                  <LogIn></LogIn>
                </div>
              </Route>
              <PrivateRoute path="/:type/search">
                  <Search></Search>
              </PrivateRoute>
              <Route exact path="/">
                <div className="d-flex justify-content-around m-5 p-4">
                  {
                    vehicle.map(vehicle => <Home vehicle = {vehicle}></Home> )
                  }
                </div>
              </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
