import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';
import Products from '../components/Products';

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
        <div>
            {loading ? <Spinner/> :
            products.length > 0 ? (<div>
                {products.map((product) => (
                    <Products key={product.id} product={product} />))}</div>) :
            
            <div><p>no data found</p></div>
            } 
                 
        </div>
    );
}
export default Home;