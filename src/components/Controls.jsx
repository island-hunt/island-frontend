import React from 'react'
import Button from '@material-ui/core/Button'


const Controls = () => {
  
  return (
    <div className="control-wrap">
      <p>Which Way?</p>
      <Button variant="contained" className="North" onClick={() => this.handleDirection("n")}>N</Button>
      <Button variant="contained" className="South" onClick={() => this.handleDirection("s")}>S</Button>
      <Button variant="contained" className="East" onClick={() => this.handleDirection("e")}>E</Button>
      <Button variant="contained" className="West" onClick={() => this.handleDirection("w")}>W</Button>
    </div>
  )
}

export default Controls
