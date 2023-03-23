import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import vectorSunny from '../assets/Vector-sunny.png';
import axios from 'axios';

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


const TopSection = () => {
    const [basicWeatherInfo, setBasicWeatherInfo] = useState(null)

    const dateBuilder = (fullDate) => {
        const day = days[fullDate.getDay()];
        const date = fullDate.getDate();
        const month = fullDate.getMonth() + 1;
        const year = fullDate.getFullYear();
        const hour = fullDate.getHours() < 10 ? '0' + fullDate.getHours() : fullDate.getHours(); 
        const minute = fullDate.getMinutes() < 10 ? '0' + fullDate.getMinutes() : fullDate.getMinutes(); 

        return `${hour}:${minute} ${day} ${date}/${month}/${year}`;
    };
    
  const getWeather = async (position) => {
    
      const weather = await axios.get(`${process.env.REACT_APP_WEATHER_BASE_URL}weather?lat=${position?.coords?.latitude}&lon=${position?.coords?.longitude}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`);
      
    setBasicWeatherInfo(weather.data);
  };

  const setDefaultLocation = async () => {
    const weather = await axios.get(`${process.env.REACT_APP_WEATHER_BASE_URL}/weather?q=Bengaluru&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`);
    setBasicWeatherInfo(weather.data);
  }
    useEffect(() => {
        try {
            
            if (navigator?.geolocation) {
                navigator?.geolocation?.getCurrentPosition(getWeather);
            } else {
            setDefaultLocation();
            alert("Geolocation not available, set Bengaluru as default");

            }
            
        } catch (error) {
            setDefaultLocation();
            alert("Geolocation not available, set Bengaluru as default");
            
        }
    }, [])

  return (
    <div id='home'>
      <div className='top-wallpaper'></div>
        <div className='top-section'>
            <Navbar />
            <div className='weatherDetailsOne'>
                <h1 className='weatherDetailsHeading text active '>Weather Details</h1>
                <div className='weatherDetailsBasic'>
                    <div className='weatherDetailsBasicInner text'>
                        <div> Cloudy</div> 
                        <div> {basicWeatherInfo?.clouds?.all}</div> 
                    </div>
                    <div className='weatherDetailsBasicInner text'>
                        <div> Humindity</div> 
                        <div> {basicWeatherInfo?.main?.humidity}%</div> 
                    </div>
                    <div className='weatherDetailsBasicInner text'>
                        <div> Wind</div> 
                        <div> {basicWeatherInfo?.wind?.speed}km/h</div> 
                    </div>
                </div>
            </div>
            <div className='text weatherDetailsTwo'>
                <div className='temperature'>{Math.round(basicWeatherInfo?.main?.temp)}<sup>o</sup></div>
                <div className='weatherDetailPlaceAndTime'>
                    <div className='place'>{basicWeatherInfo?.name}</div>
                    <div className='dateAndTime'>{dateBuilder(new Date())}</div>
                </div>
                <div className='weatherDetailIcon'>
                    <img src={vectorSunny} alt="" srcset="" />
                </div>
            </div>    
        </div>
    </div>
  )
}

export default TopSection