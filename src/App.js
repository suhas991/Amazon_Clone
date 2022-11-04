import "./styles.css";
import "./header.css";
import Product from "./product";
import Header from "./header";
import Navbar1 from "./Nav";

export default function App() {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div className="main-cover">
        <div>
          <Navbar1 />
        </div>
        <div className="grid-wrap">
          <Product /> <Product /> <Product /> <Product /> <Product />
          <Product /> <Product /> <Product /> <Product /> <Product />
          <Product /> <Product /> <Product /> <Product /> <Product />
          <Product /> <Product /> <Product /> <Product /> <Product />
          <Product /> <Product /> <Product /> <Product />
        </div>
      </div>
    </div>
  );
}
