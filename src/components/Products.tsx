import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/CartSlice';
import './Products.css'; // Import the CSS file

type ProductProps = {
    product: { id: number; title: string; price: number; description: string; category: string; image: string; }
};

const Products = ({ product }: ProductProps) => {
    interface cartProps {
        cart: any; 
    }
    const { cart } = useSelector((state: cartProps) => state);
    const dispatch = useDispatch();

    const handleAddToCart = (product: { id: number; title: string; price: number; description: string; category: string; image: string; }) => {
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            quantity: 1,
            name: product.title,
            item: product.id.toString()
        };
        dispatch(addToCart(cartItem));
    };

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart({ id }));
    };

    return (
        <div className="product-card">
            <img className="product-image" height={50} width={50} src={product.image} alt={product.title} />
            <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            <p className="product-price">Price: ${product.price}</p>
            {
                cart.some((item: { id: number }) => item.id === product.id) ? (
                    <button className="product-button remove" onClick={() => { handleRemoveFromCart(product.id) }}>Remove Item</button>
                ) : (
                    <button className="product-button add" onClick={() => { handleAddToCart(product) }}>Add to Cart</button>
                )
            }
        </div>
    );
};

export default Products;