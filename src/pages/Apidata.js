



const Apidata = () => {

    async function getCollectionData(){
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

  fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=300', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
        console.log("here is the collections of OpenSea Collection of NFT")

    }
    
    return (
        <div className = "center">
        <div>
            <button className="button-63" onClick={getCollectionData}> Get All NFTs Collection From OpenSea</button>
        </div>
    </div>
 
 );

}
export default Apidata;