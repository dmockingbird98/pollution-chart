import React, { useEffect, useState } from 'react';
import pollution from './common/services/measurements';

export default function SelectCity({code,handleCity}){

    const [city,setCity] = useState("Kochi");
    const [cities,setCities] = useState(null);

    useEffect(() => {
        pollution.cities(code).then(data => setCities(data.results));
      },([code]));

      function handleClick(city){
          setCity(city);
          handleCity(city);
      }
    return(
        <div className="city">
        <div className="dropdown">
                <button className="dropdown-toggle" type="button" data-toggle="dropdown"> {city || "Select City ..."} </button>
                <div className="dropdown-menu">
                    {cities && cities.map(({name},index) => name && <p key={index} className="dropdown-item" onClick={()=>handleClick(name)}>{name}</p>)}
                </div>
            </div>
        </div>
    )
}