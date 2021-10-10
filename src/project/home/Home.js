import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <div className="title">
                <h1>Learn React.js</h1>
            </div>
            <div className="projects_box">
                {/* Add your project card here*/}
                
                    <div className="project">
                        <h1>Quote_Generator</h1>
                        <Link to="/quote_generator">Let's go there</Link>
                    </div>
                          
                <div className="project">
                    <h1>Counter</h1>
                    <Link to="/counter">Let's go there</Link>
                </div>

            </div>
        </div>
    )
}

export default Home
