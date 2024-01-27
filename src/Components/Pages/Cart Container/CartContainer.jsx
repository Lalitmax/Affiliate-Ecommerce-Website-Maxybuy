import React from 'react'
import './cartContainer.css'
import CartItem from './cartItem'
const CartContainer = () => {
    return (
        <div className="cart-container">
            <div className="cartItems">
                <div className="items-list">
                    <div className="ptpqtr">
                        <div className="product-title">
                            <h3>Product</h3>
                            <h3 className='ttttt'>Title</h3>
                            <h3></h3>
                        </div>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                        <h3>Remove</h3>
                    </div>

                </div>
                <CartItem></CartItem>
                <div className="cart-price">
                    <div className="left-calc">
                        <div className="calculation">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>$34</span>
                            </div>
                            <div className="shipping-fee">
                                <span>Shipping Fee</span>
                                <span>Free</span>
                            </div>
                            <div className="total-price">

                                <span>Total</span>
                                <span>$34</span>
                            </div>

                        </div>
                        <div className="proceed-to-checkout">
                            <button>Proceed TO Checkout</button>
                        </div>
                    </div>
                    <div className="right-promo-code">
                        <div className='pc'>
                           <p> If you have a promo code, Enter it here</p>
                           <div className="input-btn">
                            <input type="text" name="" id="" />
                            <button>Submit</button>
                           </div>
                           
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartContainer
