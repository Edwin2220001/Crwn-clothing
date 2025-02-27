import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart  } = useContext(CartContext);

    const clearItemHandler= () => {clearItemFromCart(cartItem)};
    const addHandler= () => {addItemToCart(cartItem)};
    const removeHandler= () => {removeItemFromCart(cartItem)};

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt= {` ${name} `} />
            </div>
            <span className="name"> {name} </span>
            <span className="quantity">
                <div className="arrow" onClick={removeHandler}>&#10094;</div>     
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addHandler}>&#10095;</div>  
            </span>
            <span className="price"> {price} </span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;




// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

// import {
//   CheckoutItemContainer,
//   ImageContainer,
//   BaseSpan,
//   Quantity,
//   Arrow,
//   Value,
//   RemoveButton,
// } from './checkout-item.styles';

// const CheckoutItem = ({ cartItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;

//   const { clearItemFromCart, addItemToCart, removeItemToCart } =
//     useContext(CartContext);

//   const clearItemHandler = () => clearItemFromCart(cartItem);
//   const addItemHandler = () => addItemToCart(cartItem);
//   const removeItemHandler = () => removeItemToCart(cartItem);

//   return (
//     <CheckoutItemContainer>
//       <ImageContainer>
//         <img src={imageUrl} alt={`${name}`} />
//       </ImageContainer>
//       <BaseSpan> {name} </BaseSpan>
//       <Quantity>
//         <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
//         <Value>{quantity}</Value>
//         <Arrow onClick={addItemHandler}>&#10095;</Arrow>
//       </Quantity>
//       <BaseSpan> {price}</BaseSpan>
//       <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
//     </CheckoutItemContainer>
//   );
// };

// export default CheckoutItem;