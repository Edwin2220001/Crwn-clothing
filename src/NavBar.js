import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "./assets/crown.svg";
import "./NavBar.styles.scss";


const NavBar= () =>{
    return (
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
            </Link>
            
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                <Link className="nav-link" to="/sign-in">
                    SIGN IN
                </Link>
                <Link className="nav-link" to="/contacts">
                    CONTACTS
                </Link>
            </div>
        </div>
    );
};

export default NavBar;