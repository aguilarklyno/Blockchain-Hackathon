import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import Header from "../components/Header";
import { HiFingerPrint } from "react-icons/hi"
import Metamask from '../components/images/metamask.png'
import { useWeb3Contract } from "react-moralis"
import { abi } from "../artifacts/Soulbound.json"
import { useMoralis } from "react-moralis"
import { ethers } from "ethers"
import { useNotification } from "web3uikit"
const contractAddresses = '0x03d19A9C3D3e9B9Cf82ADfF9Fe017062C9bC68df';
import { Web3Storage } from 'web3.storage'
import artifact from '../artifacts/Soulbound.json'

const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user",
};


function Use() {
    const [userid, setUserid] = useState('');
    let uid = '';
    const [isCaptureEnable, setCaptureEnable] = useState(false);
    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setUrl(imageSrc);
        }
    }, [webcamRef]);

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
            _biometricInfo:10
            //1,3,8
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
        <>
            <Header />
            <div className="flex justify-center mt-20 mb-10">
                <h1 className='text-8xl font-bold '>
                    <span className='text-9xl font-bold'>E</span>
                    VE
                    <span className='text-8xl text-blue-400 font-bold'>N</span>
                </h1>
            </div>



            <div className="flex align-middle">
                <div className="mr-16 ml-40 justify-center rounded-full flex-none">
                    <Webcam
                        audio={false}/* 
                            width={500}
                            height={500} */
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        className='rounded-full w-96 h-96'
                    />
                </div>
                <div className="w-16 h-96 mr-6">
                    <div className="my-48 w-5 h-5 bg-white rounded-full"></div>
                </div>
                <div className="flex justify-center mb-10 mr-12">
                    <button >
                        <HiFingerPrint
                        onClick= {
                            async () =>
                           { 
                            await mintSBT({
                                onSuccess: handleSuccess,
                                onError: (error) => console.log('ログインに失敗しました。'),
                            })
                        }
                            
                        }
                        className='w-32 h-32 mt-10 transition ease-in-out delay-150 color-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full'></HiFingerPrint>
                    </button>
                </div>
                <div className="w-16 h-96 mr-8">
                    <div className="my-48 w-5 h-5 bg-white rounded-full"></div>
                </div>
                <div className="flex-none w-96 h-96 rounded-full bg-white" >
                <img src={Metamask} alt="" className='mx-12 my-14 w-72 h-72'/>
                </div>
                
            </div>


            {
                isCaptureEnable || (
                    <div className="flex justify-center">
                        <button className='bg-blue-400 w-44 md:p-2 p-3 m-4 rounded-full' type='button' onClick={() => setCaptureEnable(true)}>
                            初めての方はこちら
                        </button>
                    </div>

                )}


            <button onClick={capture}>キャプチャ</button>
            {url && (
                <>
                    <div>
                        <button
                            onClick={() => {
                                setUrl(null);
                            }}
                        >
                            削除
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <img src={url} alt="Screenshot" />
                    </div>
                </>
            )}
        </>
    );
};

export default Use
