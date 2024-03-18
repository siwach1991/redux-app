import Header from "./containers/Header.js";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing.js";
import ProductDetails from "./containers/ProductDetails.js";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/listing" element={<ProductListing/>}></Route>
        <Route path="/details" element={<ProductDetails/>}></Route>
        <Route>404 not found</Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
