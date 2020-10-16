import React,{useEffect, useState} from 'react'
import ApexChart from './common/graph';
import pollution from './common/services/measurements';

function pollutionValues(data){

    let ob={};
    let finalArray=[];
    data.map(({value,parameter})=>{ 
        if (ob[parameter]){
        return ob[parameter].push(value);
        } else {
            ob[parameter] = [];
            return ob[parameter].push(value)
        }  
    })
    
    Object.keys(ob).map(e => finalArray.push({name:e,data:ob[e]}));
    return finalArray
}

function maxandmin(data){
    let comax = 0;
    let max = 0;
    data.map(({value,parameter}) => {
        if(parameter === "co"){
            return comax = value > comax ? value : comax;
        }else{
            return max = value > max ? value : max;
        }
    })
    return {max,comax}
}

function handleDate(data) {
        let timeArray = [];
        data!==null && data.map(({date})=> timeArray.push(date.utc));
        return timeArray
}

export default function Graph({city,to,from}){
    const [arr,setArr] = useState(null);
    const [dateArr,setDate] = useState(null);
    const [max,setmax] = useState({});
    useEffect(() => {
        setArr(null)
        pollution.measurements(city,to,from).then(data =>  
            {   
                setmax(maxandmin(data.results));
                setDate(handleDate(data.results));
                setArr(pollutionValues(data.results));
            });
    },([city,to,from]));  

    return <div>
        {arr === null ? <h1>Loading</h1> : arr.length > 0 ? <ApexChart max = {max} arr={arr} dateArr={dateArr}/>: <h1>No Data Available</h1>}
    </div>
}