import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { popularProducts } from "./data";

const App = () => {
  const [data, setData] = useState(popularProducts);
  const [total,setTotal] = useState()
  const [badge, setBadge] = useState(0);
  const [basket, setBasket] = useState([]);
  
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
          element={<Cart setBasket={setBasket} basket={basket} setBadge={setBadge} badge={badge} total={total} setTotal={setTotal}/>}
        />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
