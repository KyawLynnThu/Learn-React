import HeyNow from "./components/HeyNow";

function App() {
  return (
    <div>
      { 
        [0,1,2,3,4,5,6,7,8,9].map(digit=> <HeyNow key={digit} />)
        // same form
        // [0,1,2,3,4,5,6,7,8,9].map((ele) => <HeyNow key={ele}></HeyNow>) 
      }
    </div>
  )
}

// JSX => Javascript XML => HTML => XML
// Types of Component 

// Class Component

// Functional Component

//  Only return one root component
// Can’t return two or more components
// Put all components in <div></div> to return two or more components
// Every tag needs a close tag. Example <input></input> or <input />

export default App;
