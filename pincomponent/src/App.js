import React from 'react';
import { InputBox } from './components/InputBox';

function App() {
  const [value , setValue] = React.useState("") ;
  return (
    <div>
      <InputBox length={5} onChange={val => setValue(val)} perBox={3}/>
      {/* <h2>{value}</h2> */}
    </div>
  );
}

export default App;
