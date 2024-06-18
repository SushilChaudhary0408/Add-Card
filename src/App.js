/*
import './App.css'
import Card from './components/Card';
import { useState } from "react";

function App() {

  const [incidentNumber, setIncidentNumber] = useState(null);
  const [title, setTitle] = useState(null);
  const [time, setTime] = useState(null);
  const [priority, setPriority] = useState(null);
  const [status, setStatus] = useState(null);
   [
    {
       incidentNumber: "INC0021001",
       title: "Please remove item 1 from my computer",
       time: "2023-10-09",
       priority: "3- Low",
       status: "on_hold",
    },


    // {
    //    incidentNumber: "INC0021002",
    //    title: "Please remove item 2 from my computer",
    //    time: "2023-10-09",
    //    priority: "3- Low",
    //    status: "in_progress",
    // },
    // Other mock data entries...
  ];



  return (
    <div className="App">
      <input onChange={} />
      {mockCardList.map(card => (
        <Card
          key={card.incidentNumber} // Adding a unique key prop is necessary when rendering a list of components
          incidentNumber={card.incidentNumber}
          title={card.title}
          time={card.time}
          priority={card.priority}
          status={card.status}
          onClick={() => handleCardClick(card.incidentNumber)}
        />
      ))}
    </div>
  );
}

export default App;
*/




// import { useState } from 'react';
// import './App.css'
// import Card from './components/Card';
// import HomePage from './pages/homePage';



// function App() {
//   const [incidentNumber, setIncidentNumber] = useState("");
//   const [title, setTitle] = useState("");
//   const [time, setTime] = useState("");
//   const [priority, setPriority] = useState("");
//   const [status, setStatus] = useState("");

//   const [cardList, setCardList] = useState([
//     {
//       incidentNumber: "INC0021001",
//       title: "Please remove item 1 from my computer",
//       time: "2023-10-09",
//       priority: "3- Low",
//       status: "on_hold",
//     },
//     {
//       incidentNumber: "INC0021002",
//       title: "Please remove item 2 from my computer",
//       time: "2023-10-09",
//       priority: "3- Low",
//       status: "in_progress",
//     },
//   ])

//   // const handleCardAdd = () => {
//   //   const newCard = {
//   //     incidentNumber: "INC0021002",
//   //     title: "Please remove item 2 from my computer",
//   //     time: "2023-10-09",
//   //     priority: "3- Low",
//   //     status: "in_progress",
//   //   };
//     // Add a new card


//     const handleCardAdd = () => {
//       const newCard = {
//         incidentNumber,
//         title,
//         time,
//         priority,
//         status,
//       };
//       setCardList([...cardList, newCard]);

//       setIncidentNumber("");
//       setTitle("");
//       setTime("");
//       setPriority("");
//       setStatus("");
//     }





//   const handleIncidentNumberChange = (e) => {
//     setIncidentNumber(e.target.value);
//   }

//   const handleTitleChange = (e) => setTitle(e.target.value);

//   const handleTimeChange = (e) => {
//     setTime(e.target.value);
//   }



//   const handlePriorityChange = (e) => {
//     setPriority(e.target.value);
//   }

//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//   }


// const handelCardDelete = (cardId) => {
//   const newCardList = cardList.filter(card => card.incidentNumber !== cardId);
//   setCardList(newCard)
// }


//   return (
//   <>

//     <div>
//       <div>IncidentNumber: {incidentNumber}</div>
//       <div>Title: {title}</div>
//       <div>Time: {time}</div>
//       <div>Priority: {priority}</div>
//       <div>Status: {status}</div>
//     </div>
//     <div className="App">
//       <div> {incidentNumber} </div>
//       <div> {title} </div>
//       <div> {time} </div>
//       <div> {priority} </div>
//       <div> {status} </div>
//       <span>Incident Number</span>
//       <input onChange={handleIncidentNumberChange} value={incidentNumber}></input>
//       <br />
//       <span>Title</span>
//       <input onChange={handleTitleChange} value={title}></input>
//       <br />
//       <span>Time</span>
//       <input onChange={handleTimeChange} value={time}></input>
//       <br />
//       <span>Priority</span>
//       <input onChange={handlePriorityChange}></input>
//       <br />
//       <span>Status</span>
//       <input onChange={handleStatusChange}></input>
//       <br />
//       <button onClick={handleCardAdd}>Add New Card</button>
//       {
//         cardList.map(card => {
//           return (
//             <Card
//               incidentNumber={card.incidentNumber}
//               title={card.title}
//               time={card.time}
//               priority={card.priority}
//               status={card.status}
//               deleteHandeler={handelCardDelete}
//             />
//           )
//         })
//       }
//     </div>
//   </>
//   );
// }

import './App.css'
import HomePage from './pages/HomePage';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  );
}
export default App;