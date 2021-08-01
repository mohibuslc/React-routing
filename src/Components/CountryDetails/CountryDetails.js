import React from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useState} from 'react';
import {useEffect} from 'react';
import './CountryDetails.css';





const CountryDetails = () => {
   
    let history = useHistory();

    const handleClick =()=>{ 

        history.push("/home");

    }
    
    const {NameDetails} = useParams();
    const [country, setCountry]=useState([]);
    const {capital, region, area, flag, population}=country;
    
    const dataStyle ={

        border: '1px solid green',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px',
        textAlign:'center'


    }
   
    
    useEffect (()=>{

            const url =`https://restcountries.eu/rest/v2/name/${NameDetails}`;

            fetch(url)
            .then(res => res.json())
            .then(data =>setCountry(data[0]));

    },[NameDetails]);
    
   return (
        <div style={dataStyle}>
            <h1>Country Name: {NameDetails}</h1>
            <p>Country region:{capital}</p>
            <p>region : {region}</p>
            <p>Area: {area}</p>

            <div >
            <img className="imgp" src={flag}/>

            </div>

            <div>

                <button onClick={handleClick}>Go to Home Page </button>
            </div>

            </div>
            
          
     
        
    );
};

export default CountryDetails;