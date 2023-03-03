import React, {useState ,useEffect } from 'react';
import './App.css';
import  Vaccines from './Vaccines';
import{MenuItem,
        FormControl,
        Select} from "@mui/material"

function App() {
  const [countries,setCountries]=useState([]);
     useEffect(()=>{
      const getCountriesData = async () =>{
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) =>response.json())
        .then((data)=>{
          const countries =data.map((country) =>({
            name:country.country, //UnitedStates,United kINGDOM,
            value:country.country.iso2   //uk,usa
          }));
          setCountries(countries);
        });
      };
      getCountriesData();
     },[]);
// RUNS A PIECE of code based on a given condition

  return (
    <div className="App">
      <Vaccines/>
      
            <div className='app_header'>
            <h1>Cy health tracker for covid analysis</h1>
     
  {/* from material ui */}
  <FormControl className="app_dropdown">
    <Select
      variant="outlined"
      value="abc">
        {/* loop through all the countries 
        and show a drop down list of all 
  the countries ,we use state */}
  {
    countries.map(country => (
      <MenuItem value={country.value}>{country.name}</MenuItem>

    ))
  }
       

      </Select>

  </FormControl>
              
              </div>     
     
    </div>
  );
}

export default App;
