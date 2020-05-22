import React from 'react';
import './checkout.styles.scss';

import {connect} from 'react-redux';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='headeer-block'>
                <span>Product</span>
            </div>
            <div className='headeer-block'>
                <span>Description</span>
            </div>
            <div className='headeer-block'>
                <span>Quantity</span>
            </div>
            <div className='headeer-block'>
                <span>Price</span>
            </div>
            <div className='headeer-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        ))}
        <div className='total'>
            TOTAL: ${total}
        </div>
    </div>

)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);