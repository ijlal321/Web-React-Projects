import React from 'react';
import '../Styles/WeatherCard.css';
import 'weather-icons/css/weather-icons.css';
import WeatherCardMiddle from './WeatherCardMiddle';
import WeatherCardBottom from './WeatherCardBottom';



const WeatherCard = ({ weatherData }) => {
    const {
        main: { temp = "null", humidity = "null", pressure = "null" } = {},
        weather = [{ main: "null" }],
        name = "null",
        wind: { speed = "null" } = {},
        sys: { country = "null", sunset = "null" } = {}
      } = weatherData || {};

    return (
        <div className='WeatherCard'>
            <div className='Card'>
                <div className='img-area'>
                    <i className="wi wi-day-sunny"></i>
                </div>
                <div className='middle-area'>
                    <WeatherCardMiddle temp={temp} humidity={humidity} pressure={pressure} />
                </div>
                <div className='bottom-area'>
                    <WeatherCardBottom name={name} speed={speed} sunset={sunset} country={country} />
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;