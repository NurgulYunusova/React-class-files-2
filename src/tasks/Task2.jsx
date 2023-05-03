import { useState } from "react";

function Task2() {
  const [fontSize, setFontSize] = useState();

  const changeFontSize = () => {
    let randomNumber = getRandomNumber(20, 100);
    console.log(randomNumber);
    setFontSize(randomNumber);
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <h3 style={{ fontSize: `${fontSize}px` }}>Code Academy</h3>
      <button onClick={changeFontSize}>Change Font Size</button>
    </>
  );
}

export default Task2;
