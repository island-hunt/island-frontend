import React from 'react'
import Controls from './Controls'
import Actions from './Actions'
import Map from './Map'
import axios from 'axios'

const key = process.env.SECRET_KEY
const baseUrl = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/'
const headthing = `Token ${key}`;


const Main = () => {
  return (
    <div className="wrapper">
      <p>Treasure Island</p>
      <div className="top-wrap">
        <Map/>
        {/* <Details/> */}
      </div>
      <div className="bottom-wrap">
        <Controls/>
        <Actions/>
      </div>
    </div>
  )
}

export default Main
