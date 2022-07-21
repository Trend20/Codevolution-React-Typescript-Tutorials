import React from 'react';

type GreetProps ={
  name: string;
  count: number;
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) =>{
  return(
    <div>
      <h1>
        {
          props.isLoggedIn ? `Hello ${props.name}? How are you doing? You are ${props.count} years old.` : "Welcome Guest!"
        }
      </h1>
    </div>
  )
}

export default Greet;