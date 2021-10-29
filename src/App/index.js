import React from "react";
import Homepage from "./page/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "./page/Introduction";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Error from "./page/Error";
import Contact from "./page/Contact";
import News from "./page/Blog";
import ProductDetail from "./page/ProductDetail";
import Product from "./page/Product";
import BlogDetail from "./page/BlogDetail";
import Cart from "./page/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/introduction" exact>
          <Introduction />
        </Route>
        <Route path="/news" exact>
          <News />
        </Route>
        <Route path="/404">
          <Error />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/product-detail" exact>
          <ProductDetail />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/blog-detail">
          <BlogDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
