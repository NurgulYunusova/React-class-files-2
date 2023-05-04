import { useState } from "react";

function App() {
  const [addedValues, setAddedValues] = useState([]);
  const [animal, setAnimal] = useState("");

  const addInputValue = () => {
    setAddedValues([...addedValues, animal]);
  };

  return (
    <>
      <div style={{ margin: 10 }}>
        <input type="text" onChange={(e) => setAnimal(e.target.value)} /> <br />
        <button onClick={() => setAddedValues([])}>Clear</button>
        <button onClick={addInputValue}>Add</button>
        <ul>
          {addedValues &&
            addedValues.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </>
  );
}

export default App;
