import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'Axios'

const Controls = () => {
  

const baseUrl = 'https://lambda-treasure-hunt.herokuapp.com/api/adv/'

handleDirection = direction => {
  axios({
    url: `${baseUrl}move/ `,
    method: "POST",
    headers: {
      // Authorization: `${key}`
    },
    data: {
      direction: direction
    }
  })
  .then(res=> {
    console.log("Headed ", res.data);
  })
  .catch(err => {
    console.log("Shit!", err);
  });
}

  return (
    <div>
      <p>controls here</p>
      <Button name="North" onClick={() => this.handleDirection("n")}><i className="fas fa-arrow-up"/></Button>
      <Button name="South" onClick={() => this.handleDirection("s")}><i className="fas fa-arrow-down"/></Button>
      <Button name="East" onClick={() => this.handleDirection("e")}><i className="fas fa-arrow-right"/></Button>
      <Button name="West" onClick={() => this.handleDirection("w")}><i className="fas fa-arrow-left"/></Button>
    </div>
  )
}

export default Controls
