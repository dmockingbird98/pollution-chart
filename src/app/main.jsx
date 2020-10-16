import React, { useState, useEffect } from 'react';
import Dates from './dates';
import Graph from './pollutionGraph';
import SelectCity from './selectCity';
import SelectCountry from './selectCountry';
import * as moment from 'moment';

export default function Main(){

    const [code,setCode] = useState(null);
    const [to,setTo] = useState(null);
    const [from, setFrom] = useState(null);
    const [city,setCity] = useState("Kochi");

    useEffect(() => {
        const date = new Date();
        const now = moment(date).format("YYYY-MM-DD");
        setTo(now);
      },([]));

    function handleCode(code){
        setCode(code)
    }
    function handleCity(city){
        setCity(city)
    }
    function toHandler(date){
        setTo(date)
    }

    function fromHandler(date){
        setFrom(date)
    }
    
    return <>
            <div className="filterOptions row">
                    <div className="col-4">
                        <SelectCountry handleCode={handleCode} />
                    </div>
                    <div className="col-4">
                        <SelectCity code={code} handleCity={handleCity}/>
                    </div>
                    <div className="col-4">
                        <Dates to={to} toHandler={toHandler} fromHandler={fromHandler}/>
                    </div>
            </div>
            <div className="graph">
            {/* <h1>Country is {country? country.name:""}, City is {city?city.name:''}, dates From </h1> */}
                <Graph to={to} from={from} city={city}/>
            </div>
    </>
}