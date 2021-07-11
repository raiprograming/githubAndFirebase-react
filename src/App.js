import React,{useState,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css"



import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"


import firebase from "firebase/app";
import "firebase/auth" 

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import PageNotFound from "./pages/PageNotFound"

//initialize firebase
import firebaseConfig from "./firebase/FirebaseConfig"




import './App.css';
import {UserContext} from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Nav";

firebase.initializeApp(firebaseConfig);

function App() {

  const [user,setUser]=useState(null);


  return (
    <Router>
      <UserContext.Provider value={{user,setUser}}>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="*" component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
      <Footer />
    </Router>
  );
}

export default App;
