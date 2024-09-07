import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import {
  FetchedProductsContext,
  ProductsInCartContext,
} from "./context/AppContext";
import { Nav } from "./components/Nav";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

function App() {
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);

  async function fetchProducts() {
    const { data } = await axios.get(
      "https://ecommerce-samurai.up.railway.app/product"
    );

    const productsData = data.data;

    setProducts(productsData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <FetchedProductsContext.Provider value={{ products }}>
      <ProductsInCartContext.Provider value={{ productsInCart }}>
        <Router>
          <Nav setProductsInCart={setProductsInCart} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:id"
              element={<ProductPage setProductsInCart={setProductsInCart} />}
            />
          </Routes>
          <Newsletter />
          <Footer />
        </Router>
      </ProductsInCartContext.Provider>
    </FetchedProductsContext.Provider>
  );
}

export default App;
