import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { AppContext, ProductsInCartContext } from "./context/AppContext";
import axios from "axios";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <AppContext.Provider value={{ products }}>
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
          {/* <Nav />
    <Newsletter />
    <Footer /> */}
        </Router>
      </ProductsInCartContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
