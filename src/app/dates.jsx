import React, { useState,useEffect } from 'react';
import * as moment from 'moment';

export default function Dates(props){
    const [from,setFrom] = useState(null);
    const [to,setTo] = useState();

    useEffect(() => {
        const date = new Date();
        const now = moment(date).format("YYYY-MM-DD");
        setTo(now);
      },([]));

    function handleFrom(e){
        setFrom(e.target.value);
        props.fromHandler(e.target.value);
    }
    function handleTo(e){
        setTo(e.target.value)
        props.toHandler(e.target.value);
    }
    return (
        <div className="dates">
            <label className="label"><label>From Date: <input type="date" max={to} onChange={handleFrom}/></label></label>
            <label className="label"><label>To Date: <input type="date" min={from} value={to||''} onChange={handleTo}/></label></label>
        </div>
    )
}