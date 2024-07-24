import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
let Info = ({info})=>{
    let INITIAL_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWud6hTW_RQKEat4TFd7R0HtxtpdZMCQNbhw&s";
    let HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODMx3SJIet0YiTDFLP5MdAsJNX_3GW2Zbrg&s";
    let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWmCyS4lYYd0ve-hQI0f3CJfZjgXbZ4M7GA&s";
    let RAIN_URL = "https://media.istockphoto.com/id/1205209310/photo/amazing-photo-of-rainy-season-of-monsoons-wherein-an-unrecognizable-teenage-girl-is-holding-a.webp?b=1&s=170667a&w=0&k=20&c=6kDOizFToq2yQQ_5TSHfD7ycvKrNCiu3046WAYzeUA4=";
    
    return (
        <div>
        <div style={{display:"flex" , justifyContent : "center"}}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL:COLD_URL} 
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
            {info.city}
            {
               info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon />
            }
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
            <p> Temperature : {info.temp}&deg;C</p>
            <p> humidity : {info.humidity}</p>
            <p> Maximum Temperature : {info.tempMax}&deg;C</p>
            <p> Minimum Temperature : {info.tempMin}&deg;C</p>
            <p>The Temperature can be defined as <i>{info.weather}</i> and it feels like {info.feelslike}&deg;C</p>
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}
export default Info