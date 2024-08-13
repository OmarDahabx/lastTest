import React from "react";
import { Component } from 'react';
import './App.css';
import HomePage from "./HomePage/HomePage";
// import Cart from "./Cart";
// import ScrollToTop from "react-scroll-to-top";
// import About from "./About/About";


class App extends Component{
  state = {
    persons : [
      {namee : "Ali" , age : "28"},
      {namee : "omar" , age : "24"},
      {namee : "essam" , age : "61"},
    ]
}
render(){
  return(
    <div className="text-center">
      <HomePage/>
      </div>
    );
  }
}

export default App;

