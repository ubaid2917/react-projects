import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty } from '../redux/features/Cart';
import { toast } from 'react-toastify';
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    return (
        <div className="cart-page">

            <div className="cart-banner">
                <div>
                    <p className="cart-badge">Cart</p>
                    <h1>Your Shopping Cart</h1>
                    <p className="cart-subtitle">Review items before checkout and confirm your order details.</p>
                </div>
            </div>

            <div className="cart-layout">
                <section className="cart-items-panel">
                    <div className="panel-header">
                        <h2>Cart Items</h2>
                        <span>{items.length} items</span>
                    </div>

                    {
                        items.length === 0 && (
                            <div className="empty-state">
                                <p>Your cart is empty.</p>
                                <small>Placeholder layout only; cart item rendering is not implemented.</small>
                            </div>
                        )
                    }

                    {
                        items.length > 0 && (
                            <div className="cart-items-list">
                                {items.map(item => (
                                    <div key={item.id} className="cart-item-card">
                                        <div
                                            className="item-image"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                        <div className="item-details">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <div className="item-meta">
                                                <span className="item-price">${item.price}</span>
                                                <span className="item-quantity">Qty: {item.quantity}</span>
                                                <div className=''>
                                                    <button className='btn btn-info btn-sm'
                                                    onClick={() => dispatch(increaseQty(item.id))}
                                                    ><IoMdAdd /></button> &nbsp;

                                                    <button className='btn btn-dark btn-sm'
                                                     onClick={() => dispatch(decreaseQty(item.id))}
                                                    ><TiMinus /></button>
                                                    
                                                </div>
                                                <button
                                                        className=" btn btn-danger btn-sm text-white"
                                                        onClick={() => {
                                                            dispatch(removeFromCart(item.id))
                                                            toast.info("Product Removed From Cart")
                                                        }
                                                        }
                                                        title="Remove item"
                                                    >
                                                       <FaRegTrashAlt />
                                                    </button>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    }

                </section>

                <aside className="cart-summary-panel">
                    <div className="summary-card">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <strong>${totalPrice}</strong>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <strong>$0.00</strong>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <strong>${totalPrice}</strong>
                        </div>
                        <button className="summary-button" type="button">Proceed to Checkout</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Cart;
