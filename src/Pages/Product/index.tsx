import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import errorHandler from "../../utils/errorHandler";
import './Product.scss';
import robotStoresData from '../../data/robotStores.json';
const data: any = robotStoresData;

function Product() {
  const { id }: any = useParams();
  const dataId = parseInt(id);
  const [product, setProduct] = useState(data[dataId - 1])

  return (
    <>
      <Navbar></Navbar>
      <section className="product">
        <div className="card">
          <img src={product.image}></img>
          <div>
            <h4>{product.title}</h4>
            <h5>${product.price.toFixed(2)}</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
  
  export default Product;
  