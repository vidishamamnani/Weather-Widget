import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox ({updateInfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4b227da4d2a8b3aa7630483ec5ceb172";
    let handleInputChange =(event)=>{
        setCity(event.target.value);
    }
    let genWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city:city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelslike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description
            }
                console.log(result);
                return result;
        }
        catch(err){
            throw err;
        }
    
    }
    let handleSubmit = async(event) =>{
        try{
            event.preventDefault();
            setCity("");
            genWeatherInfo();
            let newInfo = await genWeatherInfo();
            updateInfo(newInfo);
        }
        catch{
            setError(true);
        }
       
    }
    return(
        <div style={{marginBottom:"30px"}}> 
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleInputChange}/>
            <br></br><br></br>
            <Button variant="contained" type='submit'>
            Submit
            </Button>
            {error && <p style={{color:"red"}}>"No such place exist"</p>}  

            </form>
        </div>
    );

}