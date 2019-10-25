import React from 'react'

const Map = ({allRooms, currentRoom, getAllRooms}) => {
  // console.log("current room", currentRoom)
  // console.log("all rooms", allRooms)
  // console.log("get all", getAllRooms)
  if (allRooms) {
    // let columns = 60 
    // let newArray =[]
    // for(let y = 0; y < columns; y++){
    //   for(let x = 0; x < columns; x++){

    //   }
    // }
    // for loop, make a new array for the coordinates, with dynamic max-x and max-y variables to resize the map
  return(
    <div className="mapper-wrapper">
      <p>It's a Map.</p>  {/* SANITY CHECK */}
      <div className="map-wrap">
      {allRooms.map(room => {
        return (
          
            <div
              key={room.room_id}
              className="room-wrap"
              style={{
                borderRight: room.exits.includes("e") ? "none" : "2px solid #e3e3e3",
                borderLeft: room.exits.includes("w") ? "none" : "2px solid #e3e3e3",
                borderTop: room.exits.includes("n") ? "none" : "2px solid #e3e3e3",
                borderBottom: room.exits.includes("s") ? "none" : "2px solid #e3e3e3",
              }}
            >
              {/* <p classname="room-icon">
                {room.title === allRooms.title ? (
                  <i id='fa-street-view' className="fa fa-street-view"></i>
                ) : (
                    <i id='fa-circle' className="fas fa-circle"></i>
                )}
              </p>  */}
            </div>
          
        )
      })} 
      </div>
    </div>
  )
  }
  return <h2>No Rooms from allRooms</h2>    
}
  
export default Map
