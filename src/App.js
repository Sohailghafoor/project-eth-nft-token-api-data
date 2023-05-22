import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import About from './pages/About';
import MintToken from './pages/MintToken';
import MintNFt from './pages/MintNFT';
import ApiPage from './pages/ApiPage';
import { useState,  } from "react";
import NFTapi from "./pages/NFTapi";
import Apidata from "./pages/Apidata";

function App() {
  const [walletAddress, setWalletAddress] = useState([null]);

  return (
    <Router>
      <Header accounts={walletAddress} setAccounts={setWalletAddress} />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/minttoken" element = {<MintToken accounts={walletAddress} setAccounts={setWalletAddress}/>}/>
          <Route path="/mintnft" element = {<MintNFt accounts={walletAddress} setAccounts={setWalletAddress}/>}/>
          <Route path="/apipage" element = {<ApiPage accounts={walletAddress} setAccounts={setWalletAddress}/>}/>
          <Route path="/nftapi" element = {<NFTapi accounts={walletAddress} setAccounts={setWalletAddress}/>}/>
          <Route path="/apidata" element = {<Apidata accounts={walletAddress} setAccounts={setWalletAddress}/>}/> 
          <Route path="./about" element = {<About accounts={walletAddress} setAccounts={setWalletAddress}/>}/>   
        </Routes>
        <Footer/>
    </Router>

  );
}

export default App;
