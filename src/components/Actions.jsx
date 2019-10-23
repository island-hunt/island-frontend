import React from 'react'
import Button from '@material-ui/core/Button'

const Actions = () => {
  return (
    <div>
      <Button variant="contained" name="Take" onClick={() => this.handleTake()}/>
      <Button variant="contained" name="Drop" onClick={() => this.handleDrop()}/>
      <Button variant="contained" name="Sell" onClick={() => this.handleSell()}/>
      <Button variant="contained" name="Wear" onClick={() => this.handleWear()}/>
      <Button variant="contained" name="Remove" onClick={() => this.handleRemove()}/>
      <Button variant="contained" name="Examine" onClick={() => this.handleExamine()}/>
      <Button variant="contained" name="Carry" onClick={() => this.handleCarry()}/>
      <Button variant="contained" name="Receive" onClick={() => this.handleReceive()}/>
      <Button variant="contained" name="Pray" onClick={() => this.handlePray()}/>
      <Button variant="contained" name="Fly" onClick={() => this.handleFly()}/>
      <Button variant="contained" name="Dash" onClick={() => this.handleDash()}/>
      <Button variant="contained" name="Transmorgify" onClick={() => this.handleTransmorgify()}/>
      <Button variant="contained" name="Status" onClick={() => this.handleStatus()}/>
      <Button variant="contained" name="PlayerState" onClick={() => this.handlePlayerState()}/>
      <Button variant="contained" name="ChangeName" onClick={() => this.handleChangeName()}/>
    </div>
  )
}

export default Actions
