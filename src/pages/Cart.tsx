import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import './Cart.css'; // Import the CSS file

interface cartProps {
    cart: {
        item: string;
        id: number;
        name: string;
        price: number;
        quantity: number;
        image: string;
    }[];
}

const Cart = () => {        
    const { cart } = useSelector((state: cartProps) => state);
  
    return (
        <div className="cart-container">
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p> 
                    <Link to="/">
                        <button className="shop-button">Go to Shop</button>
                    </Link>
                </div>
            ) : (
                <div className="cart-content">
                    <h1>Your Cart</h1>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <CartItem
                                item={item}
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                image={item.image}
                            />
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Cart Summary</h2>
                        <p>Total Items: {cart.length}</p>
                        <p>Total Price: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                        <button className="checkout-button">Checkout</button>
                    </div>
                </div>
            )} 
        </div>
    );
}

export default Cart;

















