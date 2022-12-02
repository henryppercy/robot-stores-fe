import Navbar from "../../Componants/Navbar";
import test from '../../assets/test.jpeg';
import './Products.scss';

function Products() {
    return (
      <>
        <Navbar></Navbar>
        <section className="products-page">
          <form>
              <label htmlFor="categories"></label>
              <select name="categories" id="categories">
                <option value="category" disabled selected>Category</option>
                <option value="aprons">Aprons</option>
                <option value="baseball-ats">Baseball Hats</option>
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
            
          <div className="products">
            <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <p>$24.00</p>
            </div>
            <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <p>$24.00</p>
            </div>
            <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <p>$24.00</p>
            </div>
            <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <p>$24.00</p>
            </div>
            <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <p>$24.00</p>
            </div>
            <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <p>$24.00</p>
            </div>
            <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <p>$24.00</p>
            </div>
            <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <p>$24.00</p>
            </div>
            <div className="card">
              <img src={test}></img>
              <h4>It’s All 0’s and 1’s to Me! Apron</h4>
              <p>$24.00</p>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Products;
  