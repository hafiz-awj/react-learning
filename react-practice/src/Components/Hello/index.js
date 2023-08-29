import React from "react";
import PropTypes from 'prop-types';


export default function Hello({name}){
    return(
        <>
            <h1>Hi {name}</h1>
            <h2>How are you {name}</h2>
        </>
    )
}

Hello.propTypes = {
    name: PropTypes.string
};