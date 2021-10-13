import React, { useState } from 'react';
import './Search.css';
import data from './colors.json';

function Search() {
    const [searchTerm, setSearchTerm] = useState({
        value: ''
    })

    const handleOnChange = (prop) => (e) => {
        setSearchTerm({ ...searchTerm, [prop]: e.target.value })
    }

    return (
        <main>
            <div className="search-div">
                <input id="search-el" type="text" placeholder="Search..." value={searchTerm.value} onChange={handleOnChange('value')} />
            </div>
            <div className="color-div">
                {data.filter(obj => obj.name.toLowerCase().includes(searchTerm.value.toLowerCase())).map((color, key) => (
                    <div key={color.hex} className="color-box" style={{ backgroundColor: `${color.hex}`, width: 'fit-content', height: 'fit-content', padding: '1vw' }}>
                        <h3>{color.name}</h3>
                        <h4>{color.hex}</h4>
                        <h4>{color.rgb}</h4>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Search;