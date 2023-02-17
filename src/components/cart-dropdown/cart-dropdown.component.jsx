import { useContext } from "react";
import { CartContext } from "contexts/cart.context";

import Button from "components/button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "components/cart-item/cart-item.component";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={`cart-item-${item.id}`} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
