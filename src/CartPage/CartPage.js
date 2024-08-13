import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";
import NavBar from "../HomePage/NavBar";
import Footerr from "../HomePage/Footerr";
import ScrollToTop from "react-scroll-to-top";



function Cart() {
    const { cartTotal,totalItems ,emptyCart ,isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, } = useCart();
  
    if (isEmpty) return <p className="text-center">Your cart is empty</p>;
  
    return (
      <div>
        <h1 className="text-center">Cart ({totalUniqueItems})
          <button className="btn btn-danger ml-3" onClick={ ()=> emptyCart()}>Delete All Items</button>
        </h1>
  
      <Container>
        <Row>
          <Col md="12">
          
          <table className="table table-dark text-center">
          <thead>
          <th className="text-left">Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Operator</th>
          </thead>
          
          <tbody>
  
          {items.map((omar) => (
            <tr key={omar.id}>
              <td className="text-left"> {omar.quantity} x {omar.title} &mdash; </td>
              <td> {omar.quantity} </td>
              <td> {omar.price * omar.quantity} </td>
              
              <td> 
  
              <button className="btn btn-success" onClick={() => updateItemQuantity(omar.id, (omar.quantity ?? 0) - 1)}> - </button>
              <button className="btn btn-primary mx-3" onClick={() => updateItemQuantity(omar.id, (omar.quantity ?? 0) + 1)}> + </button>
              <button className="btn btn-danger" onClick={() => removeItem(omar.id)}>&times;</button> 
              
              </td>
              
            </tr>
          ))}
  
          </tbody>
          
        </table>
          
          <h3 className="text-center mb-5 pb-4">Total Nummber Of Items :({totalItems}) And Total Price Is : ({cartTotal}) </h3>
          </Col>
        </Row>
      </Container>
  
        
      </div>
    );
  }

 function CartPage() {
  return (
    <CartProvider>
        <NavBar/>
        <div className="mt-5 pt-5"/>
        <Cart/>
        <div className="mt-3"/>
        <Footerr/>
        <ScrollToTop smooth/>
    </CartProvider>
  )
}

export default CartPage;