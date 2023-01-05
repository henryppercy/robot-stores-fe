import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import ProductCard from "../../Components/ProductCard";
import errorHandler from "../../utils/errorHandler";
import './Products.scss';
import FilterButton from "../../Components/FilterButton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const productCategories = [...new Set(products.map((product: any) => product.category))];

  type Product = {
    id: number,
    title: string,
    price: number,
    image: string,
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      if (await errorHandler(response, setError)) {
        const data = await response.json();
        setProducts(data.data);
      }
    } catch {
      setError('Unable to retrieve products');
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <section className="products-page">
        <div className="productFilter">
          {productCategories.map((category: any) => <FilterButton category={category}></FilterButton>)}
        </div>
        {error && <div className="error">Error: {error}</div>}
        <div className="products">
          {products.map((product: Product) => 
          <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}></ProductCard>)}
        </div>
      </section>
    </>
  );
}
  
export default Products;
  