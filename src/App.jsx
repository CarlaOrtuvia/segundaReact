import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar/Navbar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>    
    <Banner/>
    <Routes>
      <Route path='/'element ={<ItemListContainer/>} />
      <Route path='/categoria'element={<ItemListContainer/>} />
      <Route path='/detalle'element={<ItemDetailContainer/>} />
    </Routes>
    path='/'
    

    </BrowserRouter>

   );
}

export default App;
