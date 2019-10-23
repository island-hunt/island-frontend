import React from 'react'
import Button from '@material-ui/core/Button'


const Controls = () => {
  
  return (
    <div className="control-wrap">
      <p>Which Way?</p>
      <div className="button-wrap">
        <Button variant="contained" className="North" onClick={() => this.handleDirection("n")}>N</Button>
      </div>
      <div className="button-wrap">
        <Button variant="contained" className="West" onClick={() => this.handleDirection("w")}>W</Button>
        <Button variant="contained" className="East" onClick={() => this.handleDirection("e")}>E</Button>
      </div>
      
      <div className="button-wrap">
        <Button variant="contained" className="South" onClick={() => this.handleDirection("s")}>S</Button>
      </div>
    </div>
  )
}

export default Controls
