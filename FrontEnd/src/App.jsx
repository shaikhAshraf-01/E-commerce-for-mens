import Home from "./pages/Home";
import Layout from "./pages/layout";
import { Routes, Route} from "react-router-dom"
import Shop from "./pages/Shop";
function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      </Route>
    </Routes>
    </>

  )
}

export default App;
