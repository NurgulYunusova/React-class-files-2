import { useState } from "react";

function Task3() {
  const countryList = ["Turkey", "Azerbaijan", "Greece", "Germany", "Russia"];
  const [countries, setCountries] = useState(countryList);

  const clearCountry = () => {
    let randomNumber = Math.floor(Math.random() * countries.length);
    countries.splice(randomNumber, 1);
    setCountries([...countries]);
  };

  return (
    <>
      <ul>
        {countries.map((country) => (
          // eslint-disable-next-line react/jsx-key
          <li key={country}>{country}</li>
        ))}
      </ul>

      <button onClick={clearCountry}>Clear</button>
    </>
  );
}

export default Task3;
