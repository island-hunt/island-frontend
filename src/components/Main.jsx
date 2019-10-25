import React, {useState, useEffect} from 'react'
import Controls from './Controls'
import Actions from './Actions'
import Details from './Details'
import MessageBox from './MessageBox'
import Map from './Map'
import axios from 'axios'

const key = process.env.REACT_APP_SECRET_KEY
const baseUrl = 'http://lambda-treasure-hunt.herokuapp.com/api/adv/'
const bcUrl = 'http://lambda-treasure-hunt.herokuapp.com/api/bc/'
const ourDB = 'https://treasure-friends.herokuapp.com/rooms/'


// ================== MAGIC CODE HERE ===================
axios.interceptors.request.use(
options => {
  options.headers.authorization = `Token ${key}`
return options},
error => {return Promise.reject(error)}
)


const Main = props => {
  const [allRooms,setAllRooms] = useState()
  const [currentRoom, setCurrentRoom] = useState()
  const [coolDown, setCoolDown] = useState(0)
  const [status, setStatus] = useState()
  const [messageLog, setMessageLog] = useState([]);
  const [gameMap, setMap] = useState()
  
  const initialSetup = async()=>{
    setAllRooms(await getAllRooms());
    setCurrentRoom(await initPlayer());
  }
  
useEffect(() => {
  let minMax = 100;
  const mapArr = []
  for(let row=0;row<minMax; row++){
    mapArr.push(new Array(1))
    for(let col=0;col<minMax-1;col++){
      mapArr[row].push("empty")
    }
    }
  setMap(mapArr)
  
  }
,[])

useEffect(() => {
  if(!(allRooms && gameMap)){return} 
  let newStuff = gameMap
  // console.log(newStuff)
  // console.log(allRooms)
  for(let i=0;i<allRooms.length;i++){
    let newThing = []
    let coords = allRooms[i].coordinates
    coords = coords.replace(")","")
    coords = coords.replace("(","")
    coords = coords.split(',')
    // console.log("logging the coords ",coords[1],coords[0])
    let rowNum = parseInt(coords[0])
    let colNum = parseInt(coords[1])
    newThing.push(allRooms[i])
    gameMap[colNum][rowNum] = newThing
  }
  }
,[allRooms])


useEffect(() => {
  
 initialSetup()
 
}, [])

useEffect(() => {
    // exit early when we reach 0
    if (!coolDown) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setCoolDown(coolDown - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [coolDown]);


 const testIt = ()=>{
   movePlayer('s')
 } 

  // ================== OUR API ENDPOINTS ===================
  const getAllRooms = async () => {
    let res = await axios
      .get(
        ourDB
      );
        return res.data
        
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
  
  const checkIfVisited = (roomID) => {
    if(allRooms){
      for(let i=0;i< allRooms.length;i++){
          let testID = parseInt(allRooms[i].room_id)
          console.log("checking this: ",roomID, " versus this: ", testID)
          if(testID === roomID){
            console.log("we've seen this room before")
            return true;
          }
          
        }

        console.log("never seen this room before")
        return false;
        
                
        
          }
          console.log("no room data to check")
    
  }
  
  const saveARoom = async (roomData) => {
    let parsed = {
      "coordinates": roomData.coordinates,
      "description": roomData.description,
      "elevation": roomData.elevation,
      "exits": roomData.exits,
      "items": roomData.items,
      "room_id": roomData.room_id,
      "terrain": roomData.terrain,
      "title": roomData.title
    }
    console.log(roomData)
    let res = await axios
      .post(
        ourDB,
        parsed
      )
      .then(response => {
        console.log(response.data)
        console.log('saved to our DB')
        getAllRooms()
      })
      .catch(error => {console.log(error.message);})
  }
  //========================================================
  const initPlayer =  async () => {
    let newUrl = `${baseUrl}init/`
    let res = await axios
      .get(
        newUrl
      );
      setCoolDown(res.data.cooldown)
      return res.data
        
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
      setCoolDown(response.data.cooldown);
      setCurrentRoom(response.data);
      setMessageLog([...messageLog, response.data.messages]);
      let newRoom = response.data
      if(!checkIfVisited(newRoom.room_id)){
        console.log("we are saving this room")
        saveARoom(newRoom)
      }
      else{
        console.log("we've been here before")
      }
    })
    .catch(error => {console.log(error.message);})
}
getAllRooms()
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

const takeTreasure = () => {
  let newUrl = `${baseUrl}take/`
  if(!currentRoom.items){return}
  for(let i=0;i<currentRoom.items.length;i++) {
    if(currentRoom.items[i].includes("treasure")){

  axios
    .post(
      newUrl,
      {"name": currentRoom.items[i]}
    )
    .then(response => {
      setCoolDown(response.data.cooldown)
      console.log(response.data)
    })
    .catch(error => {console.log(error.message);})
}
    }
  }

  // ================== THE API ENDPOINTS ===================
const getStatus = () => {
  let newUrl = `${baseUrl}status/`
  console.log(newUrl)
  axios
    .post(
      newUrl
    )
    .then(response => {
      console.log(response.data)
      setCoolDown(response.data.cooldown)
      setStatus(response.data)
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


const flyPlayer = (dir) => {
  let newUrl = `${baseUrl}fly/`
  axios
    .post(
      newUrl,
      {"direction": dir}
    )
    .then(response => {
      console.log(response.data)
      setCoolDown(response.data.cooldown)
      
    })
    .catch(error => {console.log(error.message);})
}

const dashPlayer = (dir,numRooms,dashRoomIDs) => {
  let newUrl = `${baseUrl}dash/`
  axios
    .post(
      newUrl,
      {"direction": dir, "num_rooms": numRooms, "next_room_ids": dashRoomIDs}
    )
    .then(response => {
      console.log(response.data)
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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

const dropTreasure = (treasure) => {
  let newUrl = `${baseUrl}drop/`
  axios
    .post(
      newUrl,
      {"name": treasure}
    )
    .then(response => {
      console.log(response.data)
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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
const confirmSellTreasure = () => {
  let newUrl = `${baseUrl}sell/`
  if(!status.inventory){return}
  for(let i=0;i<status.inventory.length;i++){
    if(status.inventory[i].includes("treasure")){
      axios
          .post(
            newUrl,
            {"name": status.inventory[i], "confirm":"yes"}
          )
          .then(response => {
            console.log(response.data)
            setCoolDown(response.data.cooldown)
          })
    .catch(error => {console.log(error.message);})
    }
  }
  
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
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
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
      setCoolDown(response.data.cooldown)
    })
    .catch(error => {console.log(error.message);})
}
  //  "cooldown": 1.0,
  //  "messages": ["You have a balance of 35.0 Lambda Coins"],
  //  "errors": []
//========================================================
//========================================================
  return (
    <div className="wrapper">
      <p>Treasure Island</p>
      <div className="top-wrap">
        <div className="map-wrapper">
        {gameMap ? <Map gameMap={gameMap}/> : null}
          
        </div>
        <div className="message-wrapper">
        {currentRoom ? (<><Details
          title={currentRoom.title}
          room_id={currentRoom.room_id}
          description={currentRoom.description}
          coordinates={currentRoom.coordinates}
          exits={currentRoom.exits}
          items={currentRoom.items}
          />
          <MessageBox
            messages={messageLog}
          />
          </>): (null)}
          
        </div>
      </div>
      <div className="bottom-wrap">
        <Controls movePlayer={movePlayer} moveWise={moveWisePlayer}/>
        <h1>{coolDown}</h1>
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
}









export default Main
