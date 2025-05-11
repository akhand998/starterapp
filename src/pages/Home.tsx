import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Products from '../components/Products';
import './Home.css'; // Import the CSS file

interface ProductProps {
    product: {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
    };
}

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState<ProductProps['product'][]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchProducts() {
        setLoading(true);
        try {
            const response = await fetch(API_URL);  
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="home-container">
            {loading ? (
                <Spinner />
            ) : products.length > 0 ? (
                <div className="products-grid">
                    {products.map((product) => (
                        <Products key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="no-data">
                    <p>No data found</p>
                </div>
            )}
        </div>
    );
};

export default Home;