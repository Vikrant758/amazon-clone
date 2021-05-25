import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, title, price, rating, img }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={img} alt="Product" />
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">{title}</p>
                <p className='checkoutProductPrice'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProductRating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from the basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
