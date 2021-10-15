import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home_container">
            <div className="title">
                <h1>Learn React.js</h1>
            </div>
            <div className="projects_box">
                {/* Add your project card below*/}
                <div className="project">
                    <h2>Counter</h2>
                    <Link to="/counter">Let's go there</Link>
                </div>
                 <div className="project">
                    <h2>Meme Generator</h2>
                    <Link to="/meme_generator">Let's go there</Link>
                </div>
                <div className="project">
                    <h2>Quote Generator</h2>
                    <Link to="/quote_generator">Let's go there</Link>
                </div>
                <div className="project">
                    <h2>Search Functionality</h2>
                    <Link to="/search">Let's go there</Link>
                </div>
                <div className="project">
                    <h2>Responsive slider</h2>
                    <Link to="/slider">Let's go there</Link>
                </div>
                <div className="project">
                    <h2>Currency Converter</h2>
                    <Link to="/currency_converter">Let's go there</Link>
                </div>

            </div>
        </div>
    )
}

export default Home
