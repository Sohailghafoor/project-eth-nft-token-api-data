import React from "react";
import axios from 'axios';


const ApiPage = () =>{
    
  async function collectionAccountData() {

    let { data: nfts } = await axios(
      "https://api.niftyapi.xyz/collection/nfts/0xc3f733ca98e0dad0386979eb96fb1722a1a05e69"
    );
    console.log(nfts);
  }
    
    async function metaDataCollection(){
      let { data: nfts } = await axios(
        "https://api.niftyapi.xyz/collection/attributes/0xc3f733ca98e0dad0386979eb96fb1722a1a05e69"
      );
      console.log(nfts);
    }
    async function nftOwnedData(){
      let { data: nfts } = await axios(
        "https://api.niftyapi.xyz/address/0xc3f733ca98e0dad0386979eb96fb1722a1a05e69"
      );
      console.log(nfts);
    }
    async function nftTradingAccountData(){
    
    let { data: nfts } = await axios(
      "https://api.niftyapi.xyz/address/0x4874211da929DD87E28a4267c4B96a5D0ccf48a7"
    )
    
    console.log(nfts);
      
    }
     
  async function nftCollectionRarity() {

    let { data: nfts } = await axios(
      "https://raritysniffer.dev/api/v1/collection/0x4874211da929DD87E28a4267c4B96a5D0ccf48a7"  
        );
    console.log(nfts);
  }
    return(
    <div className = "center">
        <div>
   <button className="button-63" onClick={collectionAccountData}> Get All NFTs associated in a collection</button>
   </div>
   <div>
    <button className = "button-63" onClick = {metaDataCollection}> Get All NFTs associated in a collection metaData(attributes) </button>
   </div>
   <div>
    <button className = "button-63" onClick = {nftOwnedData}> Get All NFT owned by an account </button>
   </div>
   <div>
    <button className = "button-63" onClick = {nftTradingAccountData}> Get All NFT Ranking </button>
   </div>
   <div>
    <button className = "button-36" onClick = {nftCollectionRarity}> Get Rarity of All NFT Collections  </button>
   </div>
    </div>
    )

}
export default ApiPage;