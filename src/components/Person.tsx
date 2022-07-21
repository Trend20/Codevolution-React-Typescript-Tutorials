import React from "react";


// OBJECT PROPS
type PersonProps ={
  name:{
    first: string,
    last: string
  }
}
const Person = (props: PersonProps) =>{
  return(
    <div>
      <h1>{props.name.first} {props.name.last}</h1>
    </div>
  )
}

export default Person;