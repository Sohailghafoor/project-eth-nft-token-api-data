
const hre = require("hardhat");

async function main() {

  const SohailNFTCollection = await hre.ethers.getContractFactory("SohailNFTCollection");
  const nftCollection = await SohailNFTCollection.deploy();

  await nftCollection.deployed();

  console.log("Sohail NFT Collection Contract deployed to:", nftCollection.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
