import React,{useState} from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  const [badge, setBadge] = useState(0)
  return (
    <div>
      <Announcement />
      <Navbar badge={badge}/>
      <Slider />
      <Categories />
      <Products setBadge={setBadge} badge={badge}/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
