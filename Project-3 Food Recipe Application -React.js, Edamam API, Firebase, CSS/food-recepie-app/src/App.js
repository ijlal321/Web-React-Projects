import React, { useState, useEffect } from 'react';
import Title from "./Components/Title";
import SearchArea from "./Components/SearchArea";
import Dishes from "./Components/Dishes";
import "./App.css"

function App() {

  const apiKey = "5e742556e4bb39ed18e52d45fab53f89";
  const apiId = "9d4d7499";

  const apiUrl = `https://api.edamam.com/api/recipes/v2?q=chicken&type=any&app_id=${apiId}&app_key=${apiKey}`;


  const [recepieData, setRecepieData] = useState(null);
  const [curDataCondition, setcurDataCondition] = useState("enter ingredients and click on search");


  async function fetchData() {
    setcurDataCondition("Loading");
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecepieData(data);
      if (data) {
        setcurDataCondition("LoadSuccessful");
      }
      else {
        setcurDataCondition("NoDataFound");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error as needed
      setcurDataCondition("Error getting data, try again");
    }
  };


  return (
    <div>
      <Title />
      <SearchArea onSearchClick={fetchData} />

      {curDataCondition === "LoadSuccessful" ? (
        <Dishes recepieData={recepieData} />
      ) : (<div className='curDataCondition'><h1>{curDataCondition}</h1></div>)}


    </div >
  );
}

export default App;
