import axios from 'axios';

const NFTapi = () => {

    const apiKey = "-MJWcy9AXTfwuF-e_tCtxV8EcqcwNiLT";
// Replace with the wallet address you want to query for NFTs:
const ownerAddr = "0x53f4bCE117e4F43c3aF43Cc9811219CCC2745402";
const contractAddr = "0xC8A4298c7F524b918104c4b343899eBd1195bB4f";

async function getAccountNFTCollectiondata(){
// Construct the axios request:
const baseURL = `https://polygon-mumbai.g.alchemyapi.io/nft/v2/${apiKey}/getNFTs/`;
var config = {
  method: 'get',
  url: `${baseURL}?owner=${ownerAddr}`
};
// Make the request and print the formatted response:
axios(config)
.then(response => console.log(JSON.stringify(response.data, null, 2)))
.catch(error => console.log(error));
}
async function getNFTMetaData(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const baseURL = `https://polygon-mumbai.g.alchemyapi.io/nft/v2/${apiKey}/getNFTMetadata`;
      const tokenId = "2";
      const tokenType = "erc721";
      const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}&tokenType=${tokenType}`;
      fetch(fetchURL, requestOptions)
        .then(response => response.json())
        .then(response => JSON.stringify(response, null, 2))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}
    async function getContractMataData(){
        // Construct the axios request:
        const baseURL = `https://polygon-mumbai.g.alchemy.com/nft/v2/${apiKey}/getContractMetadata/`;
        var config = {
          method: 'get',
          url: `${baseURL}?owner=${ownerAddr}`
        };
        // Make the request and print the formatted response:
        axios(config)
        .then(response => console.log(JSON.stringify(response.data, null, 2)))
        .catch(error => console.log(error));
        }
        async function getNFTforCollection(){
            // Construct the axios request:
            const baseURL = `https://polygon-mumbai.g.alchemy.com/nft/v2/${apiKey}/getNFTsForCollection/`;
            var config = {
              method: 'get',
              url: `${baseURL}?owner=${ownerAddr}`
            };
            // Make the request and print the formatted response:
            axios(config)
            .then(response => console.log(JSON.stringify(response.data, null, 2)))
            .catch(error => console.log(error));
            }
    return(
        <>
        <div>
        <button className = "button-36" onClick = {getAccountNFTCollectiondata}> Get NFT Assets of Connected MetaMask Account</button>
       </div>
       <div>
        <button className = "button-36" onClick = {getNFTMetaData}> Get NFT MetaData of Connected MetaMask Account</button>
       </div>
       <div>
        <button className = "button-36" onClick = {getContractMataData}> Get NFT MetaData of Contract</button>
       </div>
       <div>
        <button className = "button-36" onClick = {getNFTforCollection}> Get NFT for Collection</button>
       </div>
       </>
    )
}
export default NFTapi;