import React, { useState } from 'react';
import axios from 'axios'; 
import smallCloudy from '../assets/small-cloudy.png';
import smallThunder from '../assets/small-thunder.png';
import smallSunny from '../assets/small-sunny.png';
import vectorCircle from '../assets/Vector-circle.png';
import vectorLine from '../assets/Vector-line.png';

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const Cities = () => {
    const [searchCity, setSearchCity] = useState("");
    const [searchCityDate, setsearchCityDate] = useState("");
    const [weatherData, setSeatherData] = useState(null);

    const dateBuilder = (fullDate) => {
        const day = days[fullDate.getDay()];
        const date = fullDate.getDate();
        const month = fullDate.getMonth() + 1;
        const year = fullDate.getFullYear();
        const hour = fullDate.getHours() < 10 ? '0' + fullDate.getHours() : fullDate.getHours(); 
        const minute = fullDate.getMinutes() < 10 ? '0' + fullDate.getMinutes() : fullDate.getMinutes(); 

        return `${hour}:${minute} ${day} ${date}/${month}/${year}`;
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(searchCity);
        const weather = await axios.get(`${process.env.REACT_APP_WEATHER_BASE_URL}/weather?q=${searchCity}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`);
        setSeatherData(weather.data);  
        const date = dateBuilder(new Date(weatherData.dt * 1000));
        setsearchCityDate(date);  
        setSearchCity('');
    }

  return (
    <div className='cities' id='cities'>
        <h1 className='heading'>Cities</h1> 
        <div className='primaryCities'>
            <div className='divCity'>
                <div className='citySectionOne'>
                    <img src={smallThunder} alt="" />
                    <div className='weatherType'>Thunder</div>
                </div>
                <div className='citySectionTwo'>
                    <div className='small-temperature'>24<sup>o</sup></div>
                    <div>
                        <div className='small-place'>Delhi</div>
                        <div className='small-date'>9/03/23</div>
                    </div>
                </div>
            </div> 
            <div className='divCity'>
                <div>
                    <img src={smallCloudy} alt="" />
                    <div className='weatherType'>Cloudy</div>
                </div>
                <div className='citySectionTwo'>
                    <div className='small-temperature'>29<sup>o</sup></div>
                    <div>
                        <div className='small-place'>Chennai</div>
                        <div className='small-date'>9/03/23</div>
                    </div>
                </div>
            </div>
             <div className='divCity'>
                <div>
                    <img src={smallSunny} alt="" />
                    <div className='weatherType'>Sunny</div>
                </div>
                <div className='citySectionTwo'>
                    <div className='small-temperature'>40<sup>o</sup></div>
                    <div>
                        <div className='small-place'>Jaipur</div>
                        <div className='small-date'>9/03/23</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='searchBox'>
            <form onSubmit={(e) => onSubmit(e)} className='searchForm'>
                <input className='searchInput' type="text" placeholder='Search city' value={searchCity} onChange={(e) =>  setSearchCity(e.target.value)} />
                <div className='searchIcon'>
                    <img src={vectorCircle} alt="" className='vectorCircle' />
                    <img src={vectorLine}  alt="" className='vectorLine'/>
                </div>
            </form>
            {
                weatherData && searchCityDate?
                <div className='searchData'>
                    <div className='small-temperature'>{Math.round(weatherData?.main?.temp - 273.15)}<sup>o</sup></div>
                    <div>
                        <div>City: {weatherData?.name}</div>
                        <div>Date: {searchCityDate.split(" ")[0]}</div>
                        <div>Day: {searchCityDate.split(" ")[1]}</div>
                        <div>Time: {searchCityDate.split(" ")[2]}</div>
                        <div>Cloudy: {weatherData?.clouds?.all}</div>
                        <div>Humidity: {weatherData?.main?.humidity}%</div>
                        <div>Wind: {weatherData?.wind?.speed}km/h</div>
                    </div>
                        <button className='button' onClick={() => setSeatherData(null)}>
                            Clear
                        </button>
                </div>
                :
                <div>

                </div>
            }
        </div>
    </div>
  )
}

export default Cities