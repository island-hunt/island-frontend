import React from 'react'
import Button from '@material-ui/core/Button'

const Actions = (props) => {
  return (
    <div className="actions-wrap">
      <Button variant="contained" name="Take" onClick={() => props.takeTreasure()}>Take</Button>
      <Button variant="contained" name="Drop" onClick={() => props.dropTreasure()}>Drop</Button>
      <Button variant="contained" name="Sell" onClick={() => props.sellTreasure()}>Sell</Button>
      <Button variant="contained" name="Sell" onClick={() => props.confirmSellTreasure()}>Quick Sell</Button>
      <Button variant="contained" name="Wear" onClick={() => props.wearThing()}>Wear</Button>
      <Button variant="contained" name="Remove" onClick={() => props.handleRemove()}>Remove</Button>
      <Button variant="contained" name="Examine" onClick={() => props.examineThing()}>Examine</Button>
      <Button variant="contained" name="Carry" onClick={() => props.carryThing()}>Carry</Button>
      <Button variant="contained" name="Receive" onClick={() => props.receiveThing()}>Receive</Button>
      <Button variant="contained" name="Pray" onClick={() => props.pray()}>Pray</Button>
      <Button variant="contained" name="Fly" onClick={() => props.flyPlayer()}>Fly</Button>
      <Button variant="contained" name="Dash" onClick={() => props.dashPlayer()}>Dash</Button>
      <Button variant="contained" name="Transmogrify" onClick={() => props.transMog()}>Transmogrify</Button>
      <Button variant="contained" name="Status" onClick={() => props.getStatus()}>Status</Button>
      <Button variant="contained" name="GetBalance" onClick={() => props.getCoinBalance()}>$$$</Button>
      <Button variant="contained" name="ChangeName" onClick={() => props.changeName()}>Change Name</Button>
    </div>
  )
}

export default Actions
