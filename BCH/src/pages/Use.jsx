import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useRef, useState, useCallback ,useEffect} from "react";
import Webcam from "react-webcam";
import Header from "../components/Header";

import { ethers } from "ethers";
import { Web3Storage } from 'web3.storage'
import artifact from '../artifacts/Soulbound.json'

const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user",
  };

function Use() {
    const [isCaptureEnable, setCaptureEnable] = useState(false);
    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc) {
        setUrl(imageSrc);
      }
    }, [webcamRef]);
  
    return (
      <>
      <P></P>
        <header>
          <h1>カメラアプリ</h1>
        </header>
        {
        isCaptureEnable || (
          <button onClick={() => setCaptureEnable(true)}>開始</button>
        )}
        {isCaptureEnable && (
          <>
            <div>
              <button onClick={() => setCaptureEnable(false)}>終了</button>
            </div>
            <div>
              <Webcam
                audio={false}
                width={540}
                height={360}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </div>
            <button onClick={capture}>キャプチャ</button>
          </>
        )}
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
            <div>
              <img src={url} alt="Screenshot" />
            </div>
          </>
        )}
      </>
    );
  };

export default Use


const contractAddress = "0x03d19A9C3D3e9B9Cf82ADfF9Fe017062C9bC68df"

const useContent = (
    contract,num //: ethers.Contract
  ) => {
    const { compare } = contract.functions;
    const [taskCountValue, setTaskCountValue] = useState(false);
    useEffect(() => {
      const getTaskCount = async () => {
        const _taskCount = await compare(num);
        setTaskCountValue(_taskCount);
      }
      getTaskCount()
    }, [])
  
    return {
      taskCount: taskCountValue
    }
  }

  const Content = ({contract,num}) => {
    const { taskCount } = useContent(contract,num);
    return (<p>{`taskCount ... ${taskCount}`}</p>);
  }

export const P = () => {
  const provider = new ethers.providers.JsonRpcProvider();
  const contract = new ethers.Contract(contractAddress, artifact.abi, provider);
  // const { METHOD_NAME } = contract.functions;

  return (<h1> {<Content contract={contract} num={1} />}</h1>)
}