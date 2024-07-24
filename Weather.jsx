import { useState } from "react";
import Info from "./Info";
import SearchBox from "./SearchBox";

let Weather = () =>{
    const [weatherInfo,setWeatherInfo] = useState({
            city:"jaipur",
            feelslike: 36.27,
            humidity : 79,
            temp: 29.62,
            tempMax: 29.62,
            tempMin : 29.62,
            weather : "mist"
            
    });

    let updateInfo =(newInfo)=>{
          setWeatherInfo(newInfo);
    }
    return(
    <div>
        <h2 style={{color:"black"}}> &hearts; MY WEATHER WIDGET &hearts;</h2>
        <SearchBox updateInfo = {updateInfo}/>
        <Info info = {weatherInfo}/>
    </div>);
}
export default Weather