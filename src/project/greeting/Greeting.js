import React, { useEffect, useState } from 'react';
import './Greeting.css';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function Greeting() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isBedtime, setIsBedTime] = useState(false);

    const handleBedTime = () => { setIsBedTime(true) }

    const getGreeting = () => {

        let date = new Date();
        let hours = date.getHours();
        let month = date.getMonth();
        let todaysDate = date.getDate();
        let year = date.getFullYear();

        let greet = '';
        let currentDate = `${months[month]} ${todaysDate}, ${year}`;

        if (hours < 12) greet = 'Good Morning';
        else if (hours >= 12 && hours < 16) greet = 'Good Afternoon';
        else if (hours >= 16 && hours < 24) greet = 'Good Evening';
        return { greet, currentDate };
    }

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <div className="greeting_box">
            <div className="gb_content_top">
                <h2 className="gb_content_date_text">{getGreeting().currentDate}</h2>
                <h2 className="gb_content_time_text">{time}</h2>
            </div>
            <div className="gb_content_middle">
                <h1 className="gb_content_greet_text">{ isBedtime ?  '😴 Good Night' : `🤗 ${getGreeting().greet}`} !</h1>
            </div>
            <div className="gb_content_bottom" >
                <button className="gb_content_btn_sleep" onClick={handleBedTime} >It's bedtime</button>
            </div>
        </div>
    )
}

export default Greeting;