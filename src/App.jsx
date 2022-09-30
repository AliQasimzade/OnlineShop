import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import { popularProducts } from "./data";
import datas from "./firebase/firebaseConfig";

const App = () => {
  const [data, setData] = useState(popularProducts);
  const [total, setTotal] = useState();
  const [badge, setBadge] = useState(0);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
   console.log(datas)
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              setData={setData}
              setBasket={setBasket}
              basket={basket}
              setBadge={setBadge}
              badge={badge}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <Cart
              setBasket={setBasket}
              basket={basket}
              setBadge={setBadge}
              badge={badge}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
