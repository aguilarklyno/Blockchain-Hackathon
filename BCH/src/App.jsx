import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Root  from './pages/Root';
import Use from './pages/Use';
import NftUploader from './pages/web3';
import LotteryEntrance from './pages/web32';
import { NotificationProvider } from 'web3uikit';
import { MoralisProvider } from 'react-moralis';



function App() {

  return (
    <div>
      <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/use' element={<Use />} />
          <Route path='/nft' element={<NftUploader/>}/>
          <Route path='/nft2' element={<LotteryEntrance/>}/>
        </Routes>
        <Link to='/'>Back To Top</Link>
      </BrowserRouter>
      </NotificationProvider>
      </MoralisProvider>
      
      
    </div>
  )
}

export default App
