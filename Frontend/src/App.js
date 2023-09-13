import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Gestao from "./pages/Gestao";
import Clientes from "./pages/Clientes";
import Fornecedores from "./pages/Fornecedores";
import Produtos from "./pages/Produtos";
import Utilizadores from "./pages/Utilizadores";

// components
import Menu from "./components/Menu";
import MenuGestao from "./components/MenuGestao";
import Footer from "./components/Footer";

// hooks
import MenuVisibilityControl from "./hooks/MenuVisibilityControl";

function App() {    

  return (   
    <div className="App">
      <BrowserRouter>    
      <MenuVisibilityControl showMenuRoutes={['/', '/quemsomos', '/loja', '/contatos', '/login']}>
          <Menu />
        </MenuVisibilityControl>
        <MenuVisibilityControl showMenuRoutes={['/gestao', '/clientes', '/fornecedores', '/produtos', '/utilizadores']}>
          <MenuGestao />
        </MenuVisibilityControl>
          <Routes>          
            <Route path="/" element={<Home />} />
            <Route path="/quemsomos" element={<Profile />} />
            <Route path="/loja" element={<Store />} />
            <Route path="/contatos" element={<Contact />} />
            <Route path="/login" element={<Login /> } />   
        
            <Route path="/gestao" element={<Gestao />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/utilizadores" element={<Utilizadores />} />
          </Routes>
        <Footer />
      </BrowserRouter>      
    </div>  
  );
}

export default App;
