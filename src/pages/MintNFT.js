import { ethers } from 'ethers'
import nft_token from "../contracts/SGCollection.json";

const MintNFT = () => {
    const contractAddress = '0xC16fE44070920929025c42bcDbFa1b4a94E7d051';
    async function callmintbuttun(){
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                nft_token.abi,
                signer
            );
            console.log('contract: ', contract);
            try {
            const options = { value: ethers.utils.parseEther("1") }
            const respon = await contract.safeMint("here", options);
            console.log('respon:', respon);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }
    return(
        <> 
    <button className = "button-63" onClick = {callmintbuttun}> Click For Minting Sohail NFT Collection</button>
        </>
    )
}
export default MintNFT;