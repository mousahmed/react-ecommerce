import {Link, Outlet} from "react-router-dom";
import {ReactComponent as CrwnLogo} from "assets/crown.svg";

import "./navigation.styles.scss";

function Navigation() {
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
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;