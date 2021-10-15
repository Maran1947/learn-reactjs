import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveCard from '../responsive_card/ResponsiveCard';
import './Home.css';

function Home() {
  return (
    <div className='home_container'>
      <div className='title'>
        <h1>Learn React.js</h1>
      </div>
      <div className='projects_box'>
        {/* Add your project card below*/}

        <ResponsiveCard title='Counter' route='/counter' />
        <ResponsiveCard title='Meme Generator' route='/meme_generator' />
        <ResponsiveCard title='Quote Generator' route='/quote_generator' />
        <ResponsiveCard title='Search Functionality' route='/search' />
        <ResponsiveCard title='Responsive slider' route='/slider' />
        <ResponsiveCard
          title='Currency Converter'
          route='/currency_converter'
        />
      </div>
    </div>
  );
}

export default Home;
