import React,{useEffect, useState} from 'react'
import ApexChart from './common/graph';
import pollution from './common/duck/measurements';

function pollutionValues(a){

    let ob={};
    let finalArray=[];
    a.map(({value,parameter})=>{ if (ob[parameter]){
        return ob[parameter].push(value);
            
        } else {
            ob[parameter] = [];
            return ob[parameter].push(value)
        }    
    })
    
    Object.keys(ob).map(e => finalArray.push({name:e,data:ob[e]}));
    return finalArray
}


export default function Graph(){
    const [arr,setArr] = useState([]);
    // const [pm10,setpm10] = useState(null);
    // const [so2,setso2] = useState(null);
    // const [no2,setno2] = useState(null);
    // const [o3,seto3] = useState(null);
    // const [co,setco] = useState(null);
    // const [bc,setbc] = useState(null);
    useEffect(() => {
        pollution.measurements().then(data =>  setArr(pollutionValues(data.results)));

    },([]));   


    return <div>
        {arr.length>0 && <ApexChart arr={arr}/>}
    </div>
}