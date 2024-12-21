import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from "./pages/Details";

function App() {

  const [products,setProducts] = useState([]);

  const getProducts = async () =>{

    try{
      const response = await api.get("/api/v1/products");

      console.log(response.data);

      setProducts(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/product/:id" element={<Details/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;