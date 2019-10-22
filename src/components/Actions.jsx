import React from 'react'

const Actions = (props) => {
  return (
    <div>
      <Button name="Take" onClick={() => this.handleTake()}><i className=""/></Button>
      <Button name="Drop" onClick={() => this.handleDrop()}><i className=""/></Button>
      <Button name="Sell" onClick={() => this.handleSell()}><i className=""/></Button>
      <Button name="Wear" onClick={() => this.handleWear()}><i className=""/></Button>
      <Button name="Remove" onClick={() => this.handleRemove()}><i className=""/></Button>
      <Button name="Examine" onClick={() => this.handleExamine()}><i className=""/></Button>
      <Button name="Carry" onClick={() => this.handleCarry()}><i className=""/></Button>
      <Button name="Receive" onClick={() => this.handleReceive()}><i className=""/></Button>
      
      <Button name="Pray" onClick={() => this.handlePray()}><i className=""/></Button>
      <Button name="Fly" onClick={() => this.handleFly()}><i className=""/></Button>
      <Button name="Dash" onClick={() => this.handleDash()}><i className=""/></Button>
      <Button name="Transmorgify" onClick={() => this.handleTransmorgify()}><i className=""/></Button>
      
      <Button name="Status" onClick={() => this.handleStatus()}><i className=""/></Button>
      <Button name="PlayerState" onClick={() => this.handlePlayerState()}><i className=""/></Button>
      <Button name="ChangeName" onClick={() => this.handleChangeName()}><i className=""/></Button>
    </div>
  )
}

export default Actions
