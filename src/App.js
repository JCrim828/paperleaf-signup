import { useState } from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function Square() {
  return <button className="square">X</button>;
}
