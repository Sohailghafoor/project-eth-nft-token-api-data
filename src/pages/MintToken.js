import {ethers} from 'ethers'
import simple_token from "../contracts/Token.json";


const MintToken = () => {

    const contractAddress = '0x0Cef24b85Ba7E608B74156d3A4C49f5b6a60043A';

    async function callmintbuttun(){
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
               simple_token.abi,
                signer
            );
            console.log('contract: ', contract);
            try {
            const respon = await contract.mint("0x53f4bCE117e4F43c3aF43Cc9811219CCC2745402","1212112");
            console.log('respon:', respon);
            
            } catch (err) {
                console.log("error: ", err)
            }
        }
        }
    return(
        <> 
    <button className = "button-63" onClick = {callmintbuttun}> Click For Minting Token Supplies </button>
        </>
    )
}
export default MintToken;