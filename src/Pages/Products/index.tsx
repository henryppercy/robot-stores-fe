import { useEffect, useState } from "react";
import Navbar from "../../Componants/Navbar";
import ProductCard from "../../Componants/ProductCard";
import errorHandler from "../../utils/errorHandler";
import './Products.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  interface Product {
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
        <form>
            <label htmlFor="categories"></label>
            <select name="categories" id="categories">
              <option value="category" disabled selected>Category</option>
              <option value="aprons">Aprons</option>
              <option value="baseball-hats">Baseball Hats</option>
              <option value="mugs">Mugs</option>
              <option value="t-shits">T-Shits</option>
            </select>
            <label htmlFor="characters"></label>
            <select name="characters" id="characters">
              <option value="character" disabled selected>Character</option>
              
              <option value="bubbles">Bubbles</option>
              <option value="dolores">Dolores</option>
              <option value="fred">Fred</option>
              <option value="rex">Rex</option>
            </select>
        </form>
        
        {error && <div className="error">Error: {error}</div>}
          
        <div className="products">
          {products.map((product: Product) => <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}></ProductCard>)}
        </div>
      </section>
    </>
  );
}
  
  export default Products;
  