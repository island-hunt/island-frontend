import React from 'react'
import Button from '@material-ui/core/Button'
import { isProperty } from '@babel/types'


const Controls = (props) => {
  
  return (
    <div className="control-wrap">
      <p>Which Way?</p>
      <div className="button-wrap">
        <Button variant="contained" className="North" onClick={() => props.movePlayer("n")}>N</Button>
      </div>
      <div className="button-wrap">
        <Button variant="contained" className="West" onClick={() => props.movePlayer("w")}>W</Button>
        <Button variant="contained" className="East" onClick={() => props.movePlayer("e")}>E</Button>
      </div>
      
      <div className="button-wrap">
        <Button variant="contained" className="South" onClick={() => props.movePlayer("s")}>S</Button>
      </div>
    </div>
  )
}

export default Controls
