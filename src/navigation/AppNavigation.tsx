import { Navigate, Route, Routes } from "react-router-dom";
import LoginContextWrapper from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/product/ProductDetails";
import NotFound from "../pages/NotFound";
import ROUTES from "./routes";

export const AppNavigation = () => {
  return (
    <Routes>
      <Route path={ROUTES.BASE} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      <Route path={ROUTES.LOGIN} element={<LoginContextWrapper />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetails />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppNavigation;