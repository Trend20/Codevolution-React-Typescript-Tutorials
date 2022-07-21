import React from 'react';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Person from './components/Person';

function App() {
  const PersonType ={
    first: 'Bruce',
    last: 'Mike'
  }
  return (
    <div className="App">
      <Greet name="Nehemiah" count={30} isLoggedIn={false} />
      <Person name={PersonType}/>
      <Button handleClick={() =>{
        console.log('Button clicked!')
      }}/>
    </div>
  );
}

export default App;
