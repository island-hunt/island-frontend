import React from 'react'
import Controls from './Controls'
import axios from 'axios'

const key = process.env.SECRET_KEY
const baseUrl = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/'
const headthing = `Token ${key}`;


const Main = () => {
  return (
    <div>
      <p>This is the main content</p>
      <Controls/>
    </div>
  )
};

export default Main
