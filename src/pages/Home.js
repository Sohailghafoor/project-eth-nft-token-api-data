import { useNavigate } from "react-router-dom";


const Home = () =>{
    const navigate = useNavigate();

    return(
        <div>
        <div>
        <button className="button-53" onClick={() => navigate("/apipage")}>Main Page for Get Data of Account Using API</button>
        </div>
        <div>
        <button className="button-53" onClick={() => navigate("/minttoken")}>Click for Minting Token Supply ERC20</button>
        </div>
        <div>
        <button className="button-53" onClick={() => navigate("/mintnft")}>Click for Minting NFT ERC721</button>
        </div>
        <div>
        <button className="button-53" onClick={() => navigate("/nftapi")}>ALCHEMY API NFT DATA</button>
        </div>
        <div>
        <button className="button-53" onClick={() => navigate("/apidata")}>API DATA</button>
        </div>
        <div>
        <button className="button-53" onClick={() => navigate("/about")}>About DATA</button>
        </div>
        </div>
        );
}
export default Home;