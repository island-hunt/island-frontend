import React from 'react'

const Map = ({allRooms}) => {
  return(
    <div className="mapper-wrapper">
      {allRooms.map(room => {
        console.log(room)
         
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
                {room.title === allRooms.title ? (
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
  
export default Map
