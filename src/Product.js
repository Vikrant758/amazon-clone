import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, img }) {
    const [{ basket }, dispatch] = useStateValue();

    // console.log('this is the basket >>', basket);

    const addToBasket = () => {
        //dispatch the item into th data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                img: img,
            },
        });
    };

    return (
        <div className='product'>
            <div className="productInfo">
                <p>{title}</p>
                <p className='productPrice'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="productRating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={img} alt="product" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
