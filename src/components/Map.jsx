import React from 'react'

const Map = ({gameMap}) => {
  // console.log(gameMap)
  let mapArray = []
  for(let col=0; col<100; col++){
    for(let row=1;row<100;row++){
      if(gameMap[col][row] !== "empty"){
        //do something cool
        mapArray.push(gameMap[col][row]);
      } else {
        //do boring square
        mapArray.push("blah");
      }
    }
  // console.log(mapArray)
  }
  return(
    <div className="mapper-wrapper">
      <div className="map-wrap">
      {mapArray.map(room =>{
        if(room === "blah"){
          return(<div className="blah"/>)
          
        } else {
          
            
          return(
        <div key={room.coordinates}
          className="room-wrap">
            .
        </div>
          
          )
        }

      })}
      </div>
    </div>
  );
}

export default Map
// style={{borderRight: Array.from(room.exits).includes("e") ? "none" : "2px solid #e3e3e3",borderLeft: Array.from(room.exits).includes("w") ? "none" : "2px solid #e3e3e3",borderTop: Array.from(room.exits).includes("n") ? "none" : "2px solid #e3e3e3",borderBottom: Array.from(room.exits).includes("s") ? "none" : "2px solid #e3e3e3"}}