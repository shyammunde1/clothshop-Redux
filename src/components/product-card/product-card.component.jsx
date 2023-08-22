// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import {useDispatch, useSelector } from "react-redux";
import {selectCartItems} from '../../store/cart/cart.selector'
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);

  //  const addItemToCart= useSelector(addItemToCart);
  const cartItems= useSelector(selectCartItems)
  const dispatch= useDispatch()

  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
