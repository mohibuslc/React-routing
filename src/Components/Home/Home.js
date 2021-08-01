
import React from 'react';
import {useState , useEffect} from 'react';
import Country from '../Country/Country';


const Home = () => {
    const [country , setCountry]=useState([]);
    useEffect(()=>{


        const url ="https://restcountries.eu/rest/v2/all";
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))

    },[])

    return (
        <div>
            <p>Total Country : {country.length}</p>
            {

                country.map(ct => <Country country={ct}></Country>)
            }
        </div>
    );
};

export default Home;