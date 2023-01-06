import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import ProductCard from "../../Components/ProductCard";
import errorHandler from "../../utils/errorHandler";
import './Products.scss';
import FilterButtons from "../../Components/FilterButtons";

type Product = {
  id: number,
  title: string,
  price: number,
  image: string,
  category_id: number,
  category: string,
  character_id: number,
  character: string,
  description: string,
  image2: string | 'NULL',
  image4: string | 'NULL',
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState('');
  const productCategories = [...new Set(products.map((product: Product) => product.category))];

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      if (await errorHandler(response, setError)) {
        const data = await response.json();
        setProducts(data.data);
        setFilteredProducts(data.data);
      }
    } catch {
      setError('Unable to retrieve products');
    }
  }

  const filterItem = (currentCategory: string) => {
    const newProducts = products.filter((product: Product) => {
      return product.category === currentCategory; 
    });
    setFilteredProducts(newProducts);
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="products-page">
        <div className="productFilter">
          <button className="categoryButton" onClick={() => setFilteredProducts(products)}>All</button>
          <FilterButtons categories={productCategories} filterItem={filterItem}></FilterButtons>
        </div>
        {error && <div className="error">Error: {error}</div>}
        <div className="products">
          {filteredProducts.map((product: Product) => 
          <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}></ProductCard>)}
        </div>
      </section>
    </>
  );
}
  
export default Products;
  