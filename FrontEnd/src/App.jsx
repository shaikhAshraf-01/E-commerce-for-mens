import Home from "./pages/Home";
import Layout from "./pages/layout";
import { Routes, Route} from "react-router-dom"
import Shop from "./pages/Shop";
import ProductDetail from "./components/shopcomponent/productDetail";
import Cart from "./pages/Cart";
import Auth from "./pages/AuthModal";
function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<ProductDetail />} /> 
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
    </>

  )
}

export default App;
