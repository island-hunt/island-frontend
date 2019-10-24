import React from 'react'

const Map = ({allRooms, currentRoom}) => {
  console.log("current room", currentRoom)
  console.log("all rooms", allRooms)
  if (currentRoom) {
  return(
    <div className="mapper-wrapper">
      {currentRoom.map(room => {
        console.log("each room", room)
        
        return (
          <div className="map-wrap">
            <p>It's a Map.</p>  {/* SANITY CHECK */}
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
              <p classname="room-icon">
                {room.title === currentRoom.title ? (
                  <i id='fa-street-view' className="fa fa-street-view"></i>
                ) : (
                    <i id='fa-circle' className="fas fa-circle"></i>
                )}
              </p> 
            </div>
          </div>
        )
      })} 
    </div>
  )
  }
  return <h2>No Rooms from allRooms</h2>    
}
  
export default Map
