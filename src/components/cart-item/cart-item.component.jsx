import { CartContext } from "../../contexts/cart.context";

import "./cart-item.styles.scss";

const CartItem= ({ cartItem }) => {
    const { name, imageUrl, price, quantity }= cartItem;
    
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`$ {name}`} />
            <div className="item-details">
                <span className="">{name}</span>
                <span className="price">{quantity} * ${price}</span>
            </div>
            
        </div>
    );
}

export default CartItem;




// import { CartItemContainer, ItemDetails } from './cart-item.styles';

// const CartItem = ({ cartItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;
//   return (
//     <CartItemContainer>
//       <img src={imageUrl} alt={`${name}`} />
//       <ItemDetails>
//         <span>{name}</span>
//         <span>
//           {quantity} x ${price}
//         </span>
//       </ItemDetails>
//     </CartItemContainer>
//   );
// };

// export default CartItem;