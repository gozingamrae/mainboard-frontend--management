import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./main/Main";
import Error from "./main/Error";
import Inventory from "./inventory/Inventory";


import "./App.module.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
