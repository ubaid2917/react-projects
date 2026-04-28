import './cart.css';

const Cart = () => {
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
                        <span>0 items</span>
                    </div>

                    <div className="empty-state">
                        <p>Your cart is empty.</p>
                        <small>Placeholder layout only; cart item rendering is not implemented.</small>
                    </div>
                </section>

                <aside className="cart-summary-panel">
                    <div className="summary-card">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <strong>$0.00</strong>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <strong>$0.00</strong>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <strong>$0.00</strong>
                        </div>
                        <button className="summary-button" type="button">Proceed to Checkout</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Cart;
