type ProductProps = {
    product: { id: number; title: string; price: number; description: string; category: string; image: string; }
}
const Products = ({ product }: ProductProps) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
        </div>
    );
}

export default Products;