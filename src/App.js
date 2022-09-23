import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./main/Main";
import Error from "./main/Error";
import Inventory from "./inventory/Inventory";
import Warehousing from "./inventory/Warehousing";
import Product from "./product/Product";
import AddProduct from "./product/AddProduct";
import CuponRegist from "./cupon/pages/cuponregist";
import "./App.module.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/warehousing" element={<Warehousing/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/cuponregist" element={<CuponRegist/>}/>
          <Route path="/*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
