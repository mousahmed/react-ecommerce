import { useContext } from "react";

import { UserContext } from "contexts/user.context";

import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "assets/crown.svg";

import "./navigation.styles.scss";
import { signOutUser } from "utils/firebase.utils";
import CartIcon from "components/cart-icon/cart-icon.component";
import CartDropdown from "components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "contexts/cart.context";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { toggleCart } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {toggleCart && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
