import React from 'react';
import './Country.css';

const Country = (props) => {
    const  {name,capital,flag,population,region,area,}= props.country;
    console.log(props.country);

    return (
        <div className='country'>
            <h2>This is: {name}</h2>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital: {capital}</p>
            <p>Area :{area}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;