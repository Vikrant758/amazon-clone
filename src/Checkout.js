import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkoutLeft">
                <img className='checkoutAd' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/PostMayArt/Essentials/Bankstripe/Bank-stripe-PC.jpg" alt="ad" />
                <div>
                    <h2 className='checkoutTitle'>Your Shopping Basket</h2>
                </div>
            </div>
            <div className="checkoutRight">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
