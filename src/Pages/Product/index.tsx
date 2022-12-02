import Navbar from "../../Componants/Navbar";
import test from '../../assets/test.jpeg';
import './Product.scss';

function Product() {
    return (
      <>
        <Navbar></Navbar>
        <section className="product">
          <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <h5>$24.00</h5>
              <p>Everyone's a chef in our eco-friendly apron, made from 55% organic cotton and 45% recycled polyester. Showcase your favorite Binaryville robot design, screen-printed in PVC- and phthalate-free inks. Apron measures 24 inches wide by 30 inches long and is easily adjustable around the neck and waist with one continuous strap. Machine wash warm, tumble dry low.</p>
              <h5>It’s All 0’s and 1’s to Me!</h5>
              <p>Perhaps nothing rings more true in Binaryville than this favorite phrase of the locales. Fred robot, encircled in binary digits, proudly beams out from behind these words of wisdom.</p>
          </div>
        </section>
      </>
    );
  }
  
  export default Product;
  