import React from 'react';
import { Link } from 'react-router-dom';
import './ResponsiveCard.css';

function ResponsiveCard({ title, route, routeText }) {
  return (
    <div className='responsivecard'>
      <h2>{title}</h2>
      <Link to={route}>Let's go there</Link>
    </div>
  );
}

export default ResponsiveCard;
