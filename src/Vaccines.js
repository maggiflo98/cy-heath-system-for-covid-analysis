import React,{useState,useEffect} from "react";
import{MenuItem,
    FormControl,
    Select} from "@mui/material"
function Vaccines(){
    const [vaccine,setVaccines]=useState(["1","2","3"])
    useEffect(()=>{
        const getVaccinesdata = async () =>{
            await fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1")
            .then ((response)=>response.json())
            .then((data)=>{
                Vaccines.map((vaccinne)=>({
                    name:vaccine.country,
                    value:vaccine.timestamp

                })
              
                    

                )
            })
        }
        setVaccines(vaccine);

    },[])
    return(
        
            vaccine.map(vaccines => (
              <MenuItem value={vaccine.name}>{vaccine.value}</MenuItem>
        
            ))
          
    )
}


export  default Vaccines;

