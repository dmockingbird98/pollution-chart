import axios from "axios";

const countries = () =>{
    return axios.get("https://api.openaq.org/v1/countries?limit=200").then(response=>response.data)
}

const cities = (code) => {
    return axios.get(`https://api.openaq.org/v1/cities?limit=4000${code ? `&country=${code}`:''}`).then(response => response.data)
}

const measurements = (city,to,from) => {
    return axios.get(`https://api.openaq.org/v1/measurements?limit=10000${to ? `&date_to=${to}`:''}${from ? `&date_from=${from}`:''}${city ? `&city=${city}`:'&city=Kochi'}`).then(response => response.data)
}
export default {
    countries,
    cities,
    measurements,
}