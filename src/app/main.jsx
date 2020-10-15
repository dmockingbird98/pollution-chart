import React, { useEffect, useState } from 'react';
import pollution from './common/duck/measurements';
import Graph from './pollutionGraph';

export default function Main(){

    const [country,setCountry]=useState("Select Country...");
    const [countries,setCountries] = useState(null);
    const [code,setCode] = useState(null);
    const [city,setCity] = useState(null);
    const [cities,setCities] = useState(null);
    
    useEffect(() => {
        pollution.countries().then(data => setCountries(data.results));
        pollution.cities(code).then(data => setCities(data.results));
      },([code]));
    
    function handleClick(country,code){
        setCountry(country);
        setCode(code);        
    }
    return <>
                <div className="filterOptions d-flex justify-content-between">
                    <div className="country">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" data-toggle="dropdown"> {country}</button>
                            <div className="dropdown-menu">
                                {countries && countries.map(({name, code},index) => name && <p key={index} className="dropdown-item" onClick={()=>handleClick(name,code)}>{name}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className="city">
                    <div className="dropdown">
                            <button className="dropdown-toggle" type="button" data-toggle="dropdown"> {city || "Select City ..."} </button>
                            <div className="dropdown-menu">
                                {cities && cities.map(({name},index) => name && <p key={index} className="dropdown-item" onClick={()=>setCity(name)}>{name}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className="dates">
                        <label>From Date: <input type="date"/></label>
                        
                        <label>To Date: <input type="date"/></label>
                    </div>
                </div>
                <div className="graph">
                    {/* <h1>Country is {country? country.name:""}, City is {city?city.name:''}, dates From </h1> */}
                    <Graph />
                </div>
            </>
}