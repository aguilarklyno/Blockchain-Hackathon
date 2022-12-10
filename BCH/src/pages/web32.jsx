// have a function to enter the lottery
import { useWeb3Contract } from "react-moralis"
import { abi } from "../artifacts/Soulbound.json"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { useNotification } from "web3uikit"
const contractAddresses = '0x03d19A9C3D3e9B9Cf82ADfF9Fe017062C9bC68df';
import Header from "../components/Header"


export default function LotteryEntrance() {
    // Header component passes all the information about Metamask to Moralis
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    console.log(isWeb3Enabled)
    const chainId = parseInt(chainIdHex)
    const SBTaddress = contractAddresses
    const [entranceFee, setEntranceFee] = useState("0")
    const [numPlayers, setNumplayers] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")
    const dispatch = useNotification()
    const { runContractFunction:mintSBT } = useWeb3Contract({
        abi,
        contractAddress: SBTaddress, // we need to specify the network
        functionName: "mintSBT",
        params: {
            _biometricInfo:1
        },
    })
    const { runContractFunction : compare ,contractResponse : res} = useWeb3Contract({
        abi,
        contractAddress: SBTaddress,
        functionName: "compare",
        params: {
            _biometricInfo:2
        },
    })
    useEffect(() => {
        if (isWeb3Enabled) {
            // try to read the raffle entrance fee
        }
    }, [isWeb3Enabled])
    const handleSuccess = async (tx) => {
        try {
            //await tx.wait()
            handleNewNotification(tx)
        } catch (error) {
            console.log(error)
        }
    }
    const handleNewNotification = () => {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Transaction Notification",
            position: "topR",
            // icon: "bell",
        })
    }
    return (
        <div>
            <Header></Header>
            Hi from lottery entrance!
            {SBTaddress ? (
                <div>
                    <button
                        onClick= {
                            async () =>
                           { 
                            await mintSBT({
                                onSuccess: handleSuccess,
                                onError: (error) => console.log('ログインに失敗しました。'),
                            })
                        }
                            
                        }
                    >
                        mintSBT
                    </button>
                    <button
                        onClick={async () =>
                            await compare({
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            }).then( (r) =>
                                {
                                    console.log(`result : ${r}`);
                                }
                            )
                        }
                    >
                        compare
                    </button>
                    Entrance Fee: {ethers.utils.formatUnits(entranceFee, "ether")} ETH
                    Players: {numPlayers}
                    Recent Winner: {recentWinner}
                </div>
            ) : (
                <div>No Raffle Address Detected</div>
            )}
        </div>
    )
}









