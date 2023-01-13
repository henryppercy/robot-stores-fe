import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import ProductCard from "../../Components/ProductCard";
import errorHandler from "../../utils/errorHandler";
import './Products.scss';
import FilterButtons from "../../Components/FilterButtons";
import robotStoresData from '../../data/robotStores.json';

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
  const productCategories = [...new Set(products.map((product: Product) => product.category))];
  const data: any = robotStoresData;
  
  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
  }, []);

  const filterItem = (currentCategory: string): void => {
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
        <div className="products">
          {filteredProducts.map((product: Product) => 
          <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}></ProductCard>)}
        </div>
      </section>
    </>
  );
}
  
export default Products;
  