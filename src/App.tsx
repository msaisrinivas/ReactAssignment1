import React from 'react';
import './App.css';
import Item from './Components/Item';

function App() {
  
  return (
    <div className='List'>
      <h1>Make Your List</h1>
      <Item text="List 1" id='0'/>
      <Item text="List 2" id='1'/>
      <Item text="List 3" id='2'/>
    </div>
  );
}

export default App;
