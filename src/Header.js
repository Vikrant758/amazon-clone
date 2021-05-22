import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to='/'>
                <img className='headerLogo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" />
            </Link>
            <div className="headerSearch">
                <input type="text" className="headerSearchInput" />
                <SearchIcon className="headerSearchIcon" />
            </div>
            <div className="headerNav">
                <div className="headerOption">
                    <span className="headerOptionLineOne">Hello Guest</span>
                    <span className="headerOptionLineTwo">Sign In</span>
                </div>
                <div className="headerOption">
                    <span className="headerOptionLineOne">Returns</span>
                    <span className="headerOptionLineTwo">& Orders</span>
                </div>
                <div className="headerOption">
                    <span className="headerOptionLineOne">Your</span>
                    <span className="headerOptionLineTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="headerOptionBasket">
                        <ShoppingBasketIcon />
                        <span className="headerOptionLineTwo headerBasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
