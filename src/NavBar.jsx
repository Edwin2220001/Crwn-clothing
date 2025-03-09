import { useContext } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as CrwnLogo } from "./assets/crown.svg";

import { CartContext } from "./contexts/cart.context";

import { selectCurrentUser } from "./store/user/user.selector";

import { signOutUser } from "./utils/firebase/firebase.utils";

import CartIcon from "./components/cart-icon/cart-icon.component";
import CartDropdown from "./components/cart-dropdown/cart-dropdown.component";

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from "./NavBar.styles";


const NavBar= () => {
    const currentUser = useSelector(selectCurrentUser);
    // const setCurrentUser = null;
    const { isCartOpen }= useContext(CartContext);

    const signOutHandler= async () => {
        await signOutUser();
        // setCurrentUser(null);
    };

    return (
        <NavigationContainer>
            <LogoContainer to='/'> <CrwnLogo /> </LogoContainer>
            
            <NavLinks>
                <NavLink to='/shop'>SHOP</NavLink>

                {currentUser ? (
                    <NavLink as='span' onClick={signOutHandler} to=''>
                        SIGN OUT
                    </NavLink>
                ) : (
                    <NavLink to='/auth'>SIGN IN</NavLink>
                )}

                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
            
        </NavigationContainer>
    );
};

export default NavBar;