import React from 'react';
import './Country.css';

const Country = (props) => {
    const {flag, name, capital, population, region}= props.country;
    return (
        <div className='country'>
            <img src={flag} alt="" />
            <h1>Name: {name}</h1>
            <h4>Capital:{capital}</h4>
            <h4>Population:{population}</h4>
            <h4>Region:{region}</h4>
        </div>
    );
};

export default Country;