import { useContext } from "react";
import React from "react";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <div className="cart-items">
       <div className="scroll-area">

        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
          ))}
          </div>
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
