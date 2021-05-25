import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkoutLeft">
                <img className='checkoutAd' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/PostMayArt/Essentials/Bankstripe/Bank-stripe-PC.jpg" alt="ad" />
                <div>
                    <h2 className='checkoutTitle'>Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
            <div className="checkoutRight">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
