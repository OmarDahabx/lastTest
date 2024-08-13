import React from "react";
import { Component } from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import Short from "./Shorto";
import Device from "./Device";
import SecoSec from "./SecoSec";
import Download from "./Download";
import GetApp from "./GetApp";
import Footerr from "./Footerr";
import ScrollToTop from "react-scroll-to-top";
import { CartProvider, useCart } from "react-use-cart";



class HomePage extends Component{
  render(){
    return(
      <CartProvider>
        <NavBar/>
        <Header/>
        <Short/>
        <Device/>
        <SecoSec/>
        <Download/>
        <GetApp/>
        <Footerr/>
        <ScrollToTop smooth />
        </CartProvider>
    )
  }
}

export default HomePage;
