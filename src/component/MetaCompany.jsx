import React from 'react'

import Opensea from "../Image/opensea.png"
import Metamask from "../Image/Metamask.png"
import MBtoken from "../Image/MBtoken.png"

const MetaCompany = () => {
  return (
    <section className='meta__company'>
        <div className="mbToken meta">
        <img src={MBtoken} alt="" />
        <h3>MBToken</h3>
        </div>

        <div className="metamask meta">
        <img src={Metamask} alt="" />
        <h3>METAMASK</h3>
        </div>

        <div className="opensea meta">
        <img src={Opensea} alt="" />
        <h3>OpenSea</h3>
        </div>
    </section>
  )
}

export default MetaCompany