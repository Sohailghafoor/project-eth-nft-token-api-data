

import * as React from "react";

const Header = ({accounts, setAccounts}) => {
   async function requestAccount(){
        console.log("Requesting account.......");
        if(window.ethereum){
            console.log("Make sure you have Metamask installed");
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccounts(accounts[0]);    
            }
            catch (error){
                console.log('Error Connecting....');   
            }
        }
        else {
            
            console.log("MetaMask not Detected...");
        }
    }
  return (
<div > 
<div class="header">
  <a href="/" class="logo" >CompanyLogo</a>
    <div class="header-right">
    <a class="active" href="#metamask" onClick={requestAccount}>Connect MetaMask</a>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
  
</div>

 <h3 className="center">Wallet Address: {accounts}</h3>  
 </div>
  );
}

export default Header;