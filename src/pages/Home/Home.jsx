import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";

const Home = ({
  setData,
  data,
  setBasket,
  basket,
  badge,
  setBadge,
  showListOne,
  showListTwo,
  setShowListOne,
  setShowListTwo,
  login,
  setLogin,
  setOpen,
  setOpenMsg,
  open,
}) => {
  return (
    <div>
      <Navbar
        badge={badge}
        showListOne={showListOne}
        showListTwo={showListTwo}
        setShowListOne={setShowListOne}
        setShowListTwo={setShowListTwo}
        setBadge={setBadge}
        setLogin={setLogin}
        setBasket={setBasket}
      />
      <Slider />
      <Categories />
      <Products
        open={open}
        setOpen={setOpen}
        setBadge={setBadge}
        badge={badge}
        setData={setData}
        data={data}
        setBasket={setBasket}
        basket={basket}
        login={login}
        setLogin={setLogin}
        setOpenMsg={setOpenMsg}
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
