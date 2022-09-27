import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { useRoutes } from 'react-router-dom';

const Routes = () => {
  return useRoutes([
    {path:'/',element:<Home />},
    {path:"/login",element:<Login />},
    {path:"/register",element:<Register />},
    {path:"/product",element:<Product />},
    {path:"/cart",element:<Cart />}
  ])
}

export default Routes