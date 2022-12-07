import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Componants/Navbar";
import errorHandler from "../../utils/errorHandler";
import './Product.scss';

function Product() {
  interface Product {
    id: number,
    title: string,
    price: number,
    image: string,
    description: string,
  }

  const { id } = useParams();
  const [product, setProduct] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getProduct(id)
  }, [])
  
  const getProduct = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (await errorHandler(response, setError)) {
        const data = await response.json();
        setProduct(data.data);
      }
    } catch {
      setError('Unable to retrieve product');
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <section className="product">
      {error && <div className="error">Error: {error}</div>}
      {product.map((product: Product) => 
        <div className="card">
          <img src={product.image}></img>
          <div>
            <h4>{product.title}</h4>
            <h5>${product.price.toFixed(2)}</h5>
            <p>{product.description}</p>
          </div>
        </div>
      )}
      </section>
    </>
  );
}
  
  export default Product;
  