import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./LogIn.css"
import firebaseConfig from './firebase.config';
import { UserContext } from "../../App"
import { useHistory, useLocation } from 'react-router';



const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser , setNewUser]= useState(false)

    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
        error:"",
        success:" "
    })


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                }
                //console.log(SignedInUser)
                setLoggedInUser(signedInUser);
                history.replace(from)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const handleBlurChange = (event) => {
        // console.log('email',event.name.value);
        // console.log('password', event.password.value);
        //console.log(event.target.name,event.target.value);
        // console.log(event.target.value)
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
            //console.log(isEmailValid)

        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber

        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)

        }

    }
    const handleSubmit = (event) => {
        console.log(user)
        if (user.email && user.password) {
            //console.log('submitting')
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // Signed in 
                    const newUserInfo = { ...user };
                    newUserInfo.error= " ";
                    //newUserInfo.name=user.name;
                    newUserInfo.success= true;
                    setUser(newUserInfo)

                    //var user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user};
                    newUserInfo.error=error.message
                    newUserInfo.success=false;
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // console.log(errorCode, errorMessage)
                    setUser(newUserInfo);

                  
                    // ..
                });

        }
        event.preventDefault();

    }

    return (
        <div className="form">

            <form action="" onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center  loginForm">
                <input type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser" id=""/>
                <label htmlFor="newUser">Create an account</label>
                {newUser && <input name="name" id="nameField" type="text" placeholder="Type your name" />}
                <input name="email" onBlur={handleBlurChange} id="emailField" type="text" placeholder="Type your email" required />
                <input name="password" onBlur={handleBlurChange} id="passwordField" type="password" placeholder="Type your password" required />
                {newUser &&<input name="password" onBlur={handleBlurChange} id="passwordField" type="password" placeholder="Confirm your password" required />}
                {/* <button type="button" class="btn btn-success btn-lg w-25 m-2">Submit</button> */}
                <input type="submit" id="submitButton" value="Submit" />
                <button type="button" class="btn btn-warning btn-lg w-25 m-2 rounded-pill" onClick={handleGoogleSignIn}>Sign In with Google</button>
                <button type="button" class="btn btn-primary btn-lg w-25 m-2 rounded-pill">Sign In with Facebook</button>
            </form>
            <p style={{color:'red'}} className="text-center">{user.error}</p>
           
            { 
            user.success &&  <p style={{color:'green' }} className="text-center">Welcome To RideNow</p>
            }
        </div>
    );
};

export default LogIn;