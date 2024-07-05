import React from 'react';
import '../Styles/WeatherCardMiddle.css';

const WeatherCardMiddle = ({ temp, humidity, pressure }) => {
    return (
        <div className='WeatherCardMiddle'>
            <div className='col-1'>
                {temp}
            </div>
            <div className='col-2'>
                {humidity}
            </div>
            <div className='col-3'>
                {pressure}
            </div>
        </div>
    );
}

export default WeatherCardMiddle;