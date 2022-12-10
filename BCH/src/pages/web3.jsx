// NftUploader.jsx
import React from "react";
import { useEffect, useState } from 'react'
// NftUploader.jsx
import { ethers } from "ethers";
import Web3Mint from "../artifacts/Soulbound.json";
import { Web3Storage } from 'web3.storage'



const NftUploader = () => {
  /*
   * ユーザーのウォレットアドレスを格納するために使用する状態変数を定義します。
   */
  const [currentAccount, setCurrentAccount] = useState("");
  /*この段階でcurrentAccountの中身は空*/
  console.log("currentAccount: ", currentAccount);
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };
  const connectWallet = async () =>{
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      /*
       * ウォレットアドレスに対してアクセスをリクエストしています。
       */
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      /*
       * ウォレットアドレスを currentAccount に紐付けます。
       */
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // NftUploader.jsx
const askContractToMintNft = async (ipfs) => {
  const CONTRACT_ADDRESS =
    "0x03d19A9C3D3e9B9Cf82ADfF9Fe017062C9bC68df";
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        Web3Mint.abi,
        signer
      );
      console.log("Going to pop wallet now to pay gas...");
      let nftTxn = await connectedContract.mintSBT(1);
      console.log("Mining...please wait.");
      try{await nftTxn.wait(1);} catch (e) {
        console.log(e)
      }
      console.log(nftTxn)
      console.log(
        `Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`
      );
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

// NftUploader.jsx

askContractToMintNft(8)

  const renderNotConnectedContainer = () => (
      <button onClick={connectWallet} className="cta-button connect-wallet-button">
        Connect to Wallet
      </button>
    );
  /*
   * ページがロードされたときに useEffect()内の関数が呼び出されます。
   */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="outerBox">
      {currentAccount === "" ? (
        renderNotConnectedContainer()
      ) : (
        <p>If you choose image, you can mint your NFT</p>
      )}
     < div> className="title"
        h2NFTアップローダー/h2
      </div>
     < div> className="nftUplodeBox"
       < div> className="imageLogoAndText"
        </div>
      </div>
      pまたは/p
      <button> variant="contained"
        ファイルを選択
        </button>
    </div>
  );
};

export default NftUploader;