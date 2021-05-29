import moment from 'moment';
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Order.css';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
function Order({ order, hideButton }) {
    const [{ user, basket }, dispatch] = useStateValue();

    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className='orderId'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    img={item.img}
                    hideButton />
            ))}
            <div className='orderTotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3>Order Total : {value}</h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            </div>
        </div>
    )
}

export default Order
