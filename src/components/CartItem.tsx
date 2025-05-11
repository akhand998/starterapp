import { removeFromCart } from '../redux/slices/CartSlice';
import './CartItem.css'; // Import the CSS file
import { useDispatch } from 'react-redux';

interface CartItemProps {
    item: {
        image: string;
        id: number;
    };
    key: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const CartItem: React.FC<CartItemProps> = ({ item, name, price, quantity}) => {
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        
        dispatch(removeFromCart({ id: item.id }));
    };
    return (
        <div className="cart-item">
            <img className="cart-item-image" src={item.image} alt={name} />
            <div className="cart-item-details">
                <h3 className="cart-item-name">{name}</h3>
                <p className="cart-item-price">Price: ${price}</p>
                <p className="cart-item-quantity">Quantity: {quantity}</p>
                <button className="cart-item-remove-button" onClick={() => {handleRemoveFromCart()}}>Remove Item</button>
            </div>
        </div>
    );
};

export default CartItem;