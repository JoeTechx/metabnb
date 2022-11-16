import React from 'react'
import Adventure from '../../component/Adventure'
import Header from '../../component/Header'
import MetaCompany from '../../component/MetaCompany'
// import Modal from '../../component/Modal'
import NFTs from '../../component/NFTs'
import './Home.css'

const Home = () => {
  return (
    <>
    <Header/>
    <MetaCompany/>
    <Adventure/>
    <NFTs/>
    {/* <Modal/> */}
    </>
  )
}

export default Home