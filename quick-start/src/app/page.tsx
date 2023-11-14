'use client';

import { useState } from "react";

// Home Page

export default function Home() {
  // const [count, setCount] = useState(0); Permet de mettre les deux bouttons à jour en même temps

  // function handleClick() {
  //   setCount(count + 1);
  // }

    return (
      <>
        <h1>Portfolio</h1>
        <MyButton /*count={count} onClick={handleClick} (Si l'on veut mettre les deux bouttons à jour, en même temps)*/  />
        <MyButton /*count={count} onClick={handleClick}*/ />
        <Avatar />
      </>
    );
}

// Component MyButton

function MyButton() {
  const [count, setCount] = useState(0); // Disparait si l'on veut mettre les deux bouttons à jour, en même temps

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={/*onClick (Si l'on veut mettre les deux bouttons à jour, en même temps)*/handleClick} className="btn">
      Clicked {count} times
    </button>
  );
}

// Component Avatar

function Avatar() {
  return (
    <img className="avatar" />
  );
}