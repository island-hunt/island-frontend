import React from 'react'

const Map = ({allRooms}) => {
  return(
    <div className="mapper-wrapper">
      {allRooms.map(room => {
        return (
          <div className="map-wrap">
            <p>It's a Map.</p>
            <p>{room.exits}
              {room.title === allRooms.title ? (
                <i id='av-street-view' className="fa fa-street-view"></i>
              ) : (
                  <i id='av-circle' className="fas fa-circle"></i>
                )}
            </p>
          </div>
        )
      })}
    </div>
  )
      
}
  
export default Map
