import React, { useEffect, useState } from 'react';
import pollution from './common/services/measurements';

export default function SelectCountry(props){
    
    const [country,setCountry]=useState(null);
    const [countries,setCountries] = useState([]);

    useEffect(() => {
        pollution.countries().then(data => setCountries(data.results));
    },([]));
    
    function handleClick(country,code){
        setCountry(country);
        props.handleCode(code);        
    }

    // let filteredArray = [...countries];
    
    // function handleSearch(e){
    //     filteredArray = [];
    //     let search = e.target.value;

    //     if (search.length === 0) filteredArray = [...countries];
    //     else countries.map(country => country?.name?.toLowerCase().search(search?.toLowerCase())!== -1 ? filteredArray.push(country):'')

    //     }

    return (
        <div className="country">
            <div className="dropdown">
                <button className="dropdown-toggle" type="button" data-toggle="dropdown"> {country || "Select Country..."}</button>
                <div className="dropdown-menu">
                    {/* <input type="text" onChange={handleSearch} /> */}
                    {countries.map(({name, code},index) => name && <p key={index} className="dropdown-item" onClick={()=>handleClick(name,code)}>{name}</p>)}
                </div>
            </div>
        </div>
    )
}