import React, { Component } from "react";
import NavBar from "../HomePage/NavBar";
import Footerr from "../HomePage/Footerr";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import { CartProvider, useCart } from "react-use-cart";

class About extends Component {
  state = {
    prodcuts: [],
  };
  componentDidMount() {
    axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza").then((resullt) => {
      this.setState({
        prodcuts: resullt.data.recipes
      });
    });
  }
  render() {
    return (
      <CartProvider className="about">
        <NavBar />
        <div>
          <div className="container mt-5">
            <div className="row text-center">
              {this.state.prodcuts.map((item) => (
                <div className="col-md-3">
                  <img src={item.image_url} style={{ height: "200px", width:"200px" }} />
                  <h4>{item.title}</h4>
                  <h6>{item.publisher}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footerr />
        <ScrollToTop smooth />

      </CartProvider>
    );
  }
}
export default About;
