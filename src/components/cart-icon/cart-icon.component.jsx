import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "contexts/cart.context";

function CartIcon() {
  const { setToggleCart } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setToggleCart((prev) => !prev)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
