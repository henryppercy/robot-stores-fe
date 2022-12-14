import { Link } from "react-router-dom";

type ProductDetails = {
  id: number,
  title: string,
  price: number,
  image: string,
}

const ProductCard = ({ id, title, price, image }: ProductDetails) => {  
  return (
      <div className="card">
          <Link to={"/products/" + id}><img src={image}></img></Link>
          <Link to={"/products/" + id}><h4>{title}</h4></Link>
          <p>${price.toFixed(2)}</p>
      </div>    
  );
}
  
export default ProductCard;
  