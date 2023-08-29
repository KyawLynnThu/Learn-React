import React from 'react';
import CompoA from './components/CompoA';
import CompoB from './components/CompoB';

function App() {
   return (
      // Inline CSS in JSX
      // <div style={{
      //    width: "350px",
      //    height: "150px",
      //    backgroundColor: "grey"
      // }}></div>
      <div>
         <CompoA />
         <CompoB />
      </div>
   );
}


export default App;