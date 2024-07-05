import React from 'react';
import '../Styles/WeatherCardBottom.css';
import { WiStrongWind, WiDaySunny } from 'weather-icons-react'; // Import weather icons

const WeatherCardBottom = ({ name, speed, sunset, country }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2); // Ensure two digits
    return `${hours}:${minutes}`;
  };

  return (
    <div className='CardBottom'>
      <div className='w-icon'>
        <WiStrongWind size={30} color='#777' />
      </div>
      <div className='w-text'>
        Wind: {speed} m/s
      </div>
      <div className='w-icon'>
        <WiDaySunny size={30} color='#FFD700' />
      </div>
      <div className='w-text'>
        Sunset: {formatDate(sunset)}
      </div>
      <div className='w-icon'>
        <i className="wi wi-day-sunny"></i>
      </div>
      <div className='w-text'>
        Country: {country}
      </div>
      <div className='w-icon'>
        <i className="wi wi-day-sunny"></i>
      </div>
      <div className='w-text'>
        Location: {name}
      </div>
    </div>
  );
};

export default WeatherCardBottom;
