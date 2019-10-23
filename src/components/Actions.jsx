import React from 'react'
import Button from '@material-ui/core/Button'

const Actions = () => {
  return (
    <div className="actions-wrap">
      <Button variant="contained" name="Take" onClick={() => this.handleTake()}>Take</Button>
      <Button variant="contained" name="Drop" onClick={() => this.handleDrop()}>Drop</Button>
      <Button variant="contained" name="Sell" onClick={() => this.handleSell()}>Sell</Button>
      <Button variant="contained" name="Wear" onClick={() => this.handleWear()}>Wear</Button>
      <Button variant="contained" name="Remove" onClick={() => this.handleRemove()}>Remove</Button>
      {/* <Button variant="contained" name="Examine" onClick={() => this.handleExamine()}>Examine</Button>
      <Button variant="contained" name="Carry" onClick={() => this.handleCarry()}>Carry</Button>
      <Button variant="contained" name="Receive" onClick={() => this.handleReceive()}>Receive</Button>
      <Button variant="contained" name="Pray" onClick={() => this.handlePray()}>Pray</Button> */}
      {/* <Button variant="contained" name="Fly" onClick={() => this.handleFly()}>Fly</Button>
      <Button variant="contained" name="Dash" onClick={() => this.handleDash()}>Dash</Button>
      <Button variant="contained" name="Transmogrify" onClick={() => this.handleTransmogrify()}>Transmogrify</Button>
      <Button variant="contained" name="Status" onClick={() => this.handleStatus()}>Status</Button>
      <Button variant="contained" name="PlayerState" onClick={() => this.handlePlayerState()}>Player State</Button>
      <Button variant="contained" name="ChangeName" onClick={() => this.handleChangeName()}>Change Name</Button> */}
    </div>
  )
}

export default Actions
