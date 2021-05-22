import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket?.length} items): <strong></strong></p>
                        <small className='subtotalGift'>
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={basket.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
