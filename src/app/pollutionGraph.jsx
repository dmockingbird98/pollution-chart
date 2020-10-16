import React,{useEffect, useState} from 'react'
import ApexChart from './common/graph';
import pollution from './common/services/measurements';
import * as moment from 'moment';

function pollutionValues(data){

    let ob={};
    let finalArray=[];
    data.map(({value,parameter,date})=>{ 
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

function handleDate(data) {
        let timeArray = [];
        data!==null && data.map(({date})=> timeArray.includes(moment(date).format("YYYY-MM-DD")) ? '':timeArray.push(moment(date).format("YYYY-MM-DD")));
        console.log(timeArray)
        return timeArray
}

export default function Graph({city,to,from}){
    const [arr,setArr] = useState(null);
    const [dateArr,setDate] = useState(null);

    useEffect(() => {
        setArr(null)
        pollution.measurements(city,to,from).then(data =>  
            {   setDate(handleDate(data.results))
                setArr(pollutionValues(data.results))
            });
    },([city,to,from]));  

    return <div>
        {/* {arr === null ? <h1>Loading</h1> : arr.length > 0 ? <ApexChart arr={arr} dateArr={dateArr}/>: <h1>No Data Available</h1>} */}
    </div>
}