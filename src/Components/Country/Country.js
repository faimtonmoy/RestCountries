import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h4>Capital:{props.capital}</h4>
            <h4>Population:{props.population}</h4>
        </div>
    );
};

export default Country;