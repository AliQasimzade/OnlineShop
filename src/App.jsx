import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Snackbar from "./components/SnackbarItem/SnackbarItem";
import axios from "axios";
import { useRecoilState } from "recoil";
import {UserLogin} from "./store/atoms";
import {addBasket} from "./store/atoms";
import {addBadge} from "./store/atoms"
import {userData} from "./store/atoms";

const App = () => {
  const [data, setData] = useState([]);
  const [badge, setBadge] = useRecoilState(addBadge);
  const [basket, setBasket] = useRecoilState(addBasket);
  const [showListOne, setShowListOne] = useState(false);
  const [showListTwo, setShowListTwo] = useState(false);
  const [login, setLogin] = useRecoilState(UserLogin)
  const [userAction, setUserAction] = useRecoilState(userData);

  window.onbeforeunload = () => {
    setLogin(false)
    setBasket([])
    setBadge(0)
    setUserAction({})
  }
  useEffect(() => {
    let endPoints = [
      `${process.env.REACT_APP_BASE_URL}/getMen`,
      `${process.env.REACT_APP_BASE_URL}/getWomen`,
    ];
    axios.all(endPoints.map((endpoint) => axios.get(endpoint))).then((data) => {
      const datas = data[0].data.concat(data[1].data);
      setData(datas);
    });
  }, []);
  return (
    <div className="app">
      <Snackbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data && data}
              setData={setData}
              setBasket={setBasket}
              basket={basket}
              setBadge={setBadge}
              badge={badge}
              showListOne={showListOne}
              setShowListOne={setShowListOne}
              showListTwo={showListTwo}
              setShowListTwo={setShowListTwo}
              login={login}
              setLogin={setLogin}
            />
          }
        />
          <Route path="/login" element={<Login setLogin={setLogin} setUserAction={setUserAction}/>} />
        <Route path="/register" element={<Register setLogin={setLogin}/>} />
        <Route
          path="/cart"
          element={
            <Cart
              setBasket={setBasket}
              basket={basket}
              setBadge={setBadge}
              badge={badge}
              data={data}
            />
          }
        />
        <Route
          path="/men"
          element={
            <Men
              badge={badge}
              setBadge={setBadge}
              basket={basket}
              setBasket={setBasket}
              data={data}
              showListOne={showListOne}
              setShowListOne={setShowListOne}
              showListTwo={showListTwo}
              setShowListTwo={setShowListTwo}
              login={login}
              
            />
          }
        />
        <Route
          path="/women"
          element={
            <Women
              badge={badge}
              basket={basket}
              setBadge={setBadge}
              setBasket={setBasket}
              data={data}
              showListOne={showListOne}
              setShowListOne={setShowListOne}
              showListTwo={showListTwo}
              setShowListTwo={setShowListTwo}
              login={login}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
