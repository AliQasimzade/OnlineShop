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
  total,
  setTotal,
}) => {
  return (
    <div>
      <Navbar badge={badge} />
      <Slider />
      <Categories />
      <Products
        setBadge={setBadge}
        badge={badge}
        setData={setData}
        data={data}
        setBasket={setBasket}
        basket={basket}
        total={total}
        setTotal={setTotal}
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
