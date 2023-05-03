import { useState } from "react";

function Task1() {
  const [number, setNumber] = useState();

  const changeNumber = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    setNumber(randomNumber);
  };

  return (
    <>
      <h3>Number: {number}</h3>
      <button onClick={changeNumber}>Change</button>
    </>
  );
}

export default Task1;
