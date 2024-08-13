import React, { Component } from "react";



class Cart extends Component{
    state = {
        persons : [
          {namee : "Ali" , age : "28"},
          {namee : "omar" , age : "24"},
          {namee : "essam" , age : "61"},
        ]
      }
      
    render(){

      const { allProducts } = this.props;
      const theProduct = allProducts.map( (item)=>{
        
        return(
          <div>
            <h2>My Name Is : {item.namee} </h2>
            <h2>My age Is : {item.age} </h2>
          </div>
        )

      })
        
      
      return(
        <div className="cartoo mt-5">
            {theProduct};
            
        </div>
        );
    }

}

export default Cart;
