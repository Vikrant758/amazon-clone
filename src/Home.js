import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="homeContainer">
                <img className='homeImage' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg" alt="prime" />
                <div className="homeRow">
                    <Product
                        id='12345'
                        title='Ruskin Bond - Stories of Wisdom'
                        price={399}
                        rating={5}
                        img='https://m.media-amazon.com/images/I/711hfHGE+cL._AC_UL480_FMwebp_QL65_.jpg' />
                    <Product
                        id='12346'
                        title='Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey'
                        price={35000}
                        rating={4}
                        img='https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UL480_FMwebp_QL65_.jpg' />
                </div>
                <div className="homeRow">
                    <Product
                        id='12347'
                        title='Dark Fantasy Choco Fills, 300g'
                        price={29}
                        rating={4}
                        img='https://m.media-amazon.com/images/I/51543pbO1hL._AC_SY200_.jpg' />
                    <Product
                        id='12348'
                        title='Amazon Brand - Vedaka Cumin (Jeera) Seed, 100g'
                        price={6000}
                        rating={3}
                        img='https://m.media-amazon.com/images/I/41c6zj4GVtL._AC_SY200_.jpg' />
                    <Product
                        id='12349'
                        title='Tata Sampann Unpolished Toor Dal/Arhar Dal, 1kg'
                        price={60}
                        rating={5}
                        img='https://images-na.ssl-images-amazon.com/images/I/71hFwEGKyZL._SL1000_.jpg' />
                </div>
                <div className="homeRow">
                    <Product
                        id='12350   '
                        title='Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey'
                        price={124000}
                        rating={4}
                        img='https://m.media-amazon.com/images/I/91+fneWO62L._AC_UY327_FMwebp_QL65_.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Home
