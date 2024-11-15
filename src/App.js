import { useState } from 'react';

function Message(props) {
  return <h1>{props.text}</h1>;
}

function Banner({text}) {
  return (
  <header className="banner">{text}</header>
  );
}

export default function webPage(){
  
  function Square({ character }) {
    return (
    <button className="square">{character}</button>
    );
  }

  return (
<div>
  <div>
    <Banner text= "*Logo*" />
    <Square character="J"/>
    <Square character="A"/>
    <Square character="C"/>
    <Square character="K"/>
  </div>
  <Message text="Jack Criminger" />
</div>
  );
}