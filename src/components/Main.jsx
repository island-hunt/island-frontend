import React, {useState, useEffect} from 'react'
import Controls from './Controls'
import Actions from './Actions'
// import Details from './Details'
// import Message from './Message'
import Map from './Map'
import axios from 'axios'

const key = process.env.REACT_APP_SECRET_KEY
const baseUrl = 'http://lambda-treasure-hunt.herokuapp.com/api/adv/'
const bcUrl = 'http://lambda-treasure-hunt.herokuapp.com/api/bc/'
const ourDB = 'https://treasure-friends.herokuapp.com/rooms/'



//Grab the rooms from our DB when we start up
// useEffect(() => {
//   effect
//   return () => {
//     cleanup
//   };
// }, [input])

const Main = props => {
  const [allRooms, setAllRooms] = useState()
  const [currentRoom, setCurrentRoom] = useState()


  
  useEffect(() => {
    //init player
    setAllRooms(getAllRooms)
  },[])
  return (
    <div className="wrapper">
      <p>Treasure Island</p>
      <div className="top-wrap">
        <div className="map-wrapper">
          <Map allRooms={allRooms} currentRoom={currentRoom}/>
        </div>
        <div className="message-wrapper">
          {/* <Details/>
          <Message/> */}
        </div>
      </div>
      <div className="bottom-wrap">
        <Controls movePlayer={movePlayer} moveWise={moveWisePlayer}/>
        <Actions 
          receiveThing={receiveThing}
          takeTreasure={takeTreasure}
          dropTreasure={dropTreasure}
          sellTreasure={sellTreasure}
          confirmSellTreasure={confirmSellTreasure}
          wearThing={wearThing}
          examineThing={examineThing}
          carryThing={carryThing}
          pray={pray}
          flyPlayer={flyPlayer}
          dash={dashPlayer}
          transMog={transMog}
          changeName={changeName}
          getStatus={getStatus}
          getCoinBalance={getCoinBalance}
        />
      </div>
    </div>
  )
};


const testIt = () => {
let roomData ={
"coordinates": "aa",
"description": "bb",
"elevation": "cc",
"exits": "dd",
"items": "ee",
"room_id": "ff",
"terrain": "gg",
"title": "hh",
}
saveARoom(roomData)
}
// ================== MAGIC CODE HERE ===================
axios.interceptors.request.use(
options => {options.headers.authorization = `Token ${key}`
return options},
error => {return Promise.reject(error)}
)
// ================== OUR API ENDPOINTS ===================
const getAllRooms = () => {
  axios
    .get(
      ourDB
    )
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(error => {console.log(error.message);})
}
// Returns an array of rooms containing the following data points:
// coordinates: "xx"
// description: "xx"
// elevation: "xx"
// exits: "xx"
// id: 1  <== this is the DB ID, NOT the room ID
// items: "xx"
// room_id: "xx"
// terrain: "xx"
// title: "xx"
//========================================================
const saveARoom = (roomData) => {
  axios
    .post(
      ourDB,
      {roomData}
    )
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
//================== THE API ENDPOINTS ===================
const getStatus = () => {
  let newUrl = `${baseUrl}status/`
  console.log(newUrl)
  axios
    .post(
      newUrl
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
// cooldown: 1
// encumbrance: 0
// errors: []
// gold: 0
// has_mined: false
// inventory: []
// messages: []
// name: "player285"
// speed: 10
// status: []
// strength: 10
//========================================================
const initPlayer = () => {
  let newUrl = `${baseUrl}init/`
  console.log(newUrl)
  axios
    .get(
      newUrl
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
// cooldown: 1
// coordinates: "(60,61)"
// description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction."
// elevation: 0
// errors: []
// exits: (3) ["n", "s", "w"]
// items: []
// messages: []
// players: ["player241"]
// room_id: 10
// terrain: "NORMAL"
// title: "A misty room"
//========================================================
const movePlayer = (dir) => {
  let newUrl = `${baseUrl}move/`
  axios
    .post(
      newUrl,
      {"direction": dir}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
// cooldown: 15
// coordinates: "(60,62)"
// description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction."
// elevation: 0
// errors: []
// exits: (3) ["n", "s", "w"]
// items: []
// messages: ["You have walked north."]
// players: (2) ["player245", "player289"]
// room_id: 19
// terrain: "NORMAL"
// title: "A misty room"
const flyPlayer = (dir) => {
  let newUrl = `${baseUrl}fly/`
  axios
    .post(
      newUrl,
      {"direction": dir}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}

const dashPlayer = (dir,numRooms,roomIDs) => {
  let newUrl = `${baseUrl}dash/`
  axios
    .post(
      newUrl,
      {"direction": dir, "num_rooms": numRooms, "next_room_ids": roomIDs}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const moveWisePlayer = (dir,next) => {
  let newUrl = `${baseUrl}move/`
  axios
    .post(
      newUrl,
      {"direction": dir, "next_room_id": next}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
// cooldown: 7.5
// coordinates: "(60,61)"
// description: "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction."
// elevation: 0
// errors: []
// exits: (3) ["n", "s", "w"]
// items: []
// messages: (2) ["You have walked south.", "Wise Explorer: -50% CD"]
// players: ["player241"]
// room_id: 10
// terrain: "NORMAL"
// title: "A misty room"
//========================================================
const takeTreasure = (treasure) => {
  let newUrl = `${baseUrl}take/`
  axios
    .post(
      newUrl,
      {"name": treasure}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const dropTreasure = (treasure) => {
  let newUrl = `${baseUrl}drop/`
  axios
    .post(
      newUrl,
      {"name": treasure}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const sellTreasure = (treasure) => {
  let newUrl = `${baseUrl}sell/`
  axios
    .post(
      newUrl,
      {"name": treasure}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
// {
//   "room_id": "?",
//   "title": "Shop",
//   "description": "You are standing in a shop. You can sell your treasure here.",
//   "coordinates": "?",
//   "players": [],
//   "items": [],
//   "exits": ["e"],
//   "cooldown": 2.0,
//   "errors": [],
//   "messages": ["I'll give you 100 gold for that Small Treasure.", "(include 'confirm':'yes' to sell Small Treasure)"]
// }
const confirmSellTreasure = (treasure) => {
  let newUrl = `${baseUrl}sell/`
  axios
    .post(
      newUrl,
      {"name": treasure, "confirm":"yes"}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const examineThing = (thing) => {
  let newUrl = `${baseUrl}examine/`
  axios
    .post(
      newUrl,
      {"name": thing}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const wearThing = (thing) => {
  let newUrl = `${baseUrl}wear/`
  axios
    .post(
      newUrl,
      {"name": thing}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const changeName = (name) => {
  let newUrl = `${baseUrl}change_name/`
  axios
    .post(
      newUrl,
      {"name": name}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const transMog = (name) => {
  let newUrl = `${baseUrl}transmogrify/`
  axios
    .post(
      newUrl,
      {"name": name}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const pray = () => {
  let newUrl = `${baseUrl}pray/`
  axios
    .post(
      newUrl
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const carryThing = (thing) => {
  let newUrl = `${baseUrl}carry/`
  axios
    .post(
      newUrl,
      {"name": thing}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const receiveThing = (thing) => {
  let newUrl = `${baseUrl}receive/`
  axios
    .post(
      newUrl,
      {"name": thing}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const mine = (proof) => {
  let newUrl = `${bcUrl}mine/`
  axios
    .post(
      newUrl,
      {"proof": proof}
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
//========================================================
const getLastProof = () => {
  let newUrl = `${bcUrl}last_proof/`
  axios
    .get(
      newUrl
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
// "proof": 123456,
//   "difficulty": 8,
//   "cooldown": 1.0,
//   "messages": [],
//   "errors": []
//========================================================
const getCoinBalance = () => {
  let newUrl = `${bcUrl}get_balance/`
  axios
    .get(
      newUrl
    )
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
  //  "cooldown": 1.0,
  //  "messages": ["You have a balance of 35.0 Lambda Coins"],
  //  "errors": []
//========================================================



export default Main
