import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {

  
    
    
    const{name, region, capital} = props.country;
    const history=useHistory();
    const handleClick = (countryName) =>{

        const url= `/Countries/${countryName}`;

        history.push(url)
    }

        const dataStyle ={

            border: '1px solid green',
            margin:'20px',
            padding:'20px',
            borderRadius:'20px',
            textAlign:'center'


        }
    return (
        <div style={dataStyle}> 
            <h3>Country name : {name}</h3>
            <p>Region : {region}</p>
            <p>Capital : {capital}</p>

            {/* this is command for link based Button setup */}
            {/*<h1> <Link to ={ `/Countries/${name}`} >
                
                <button>Country Information</button>
                
                
                </Link>
            
            
            
            </h1>*/}
            <button onClick={()=> handleClick(name)}> Go to Other</button>
        </div>
    );
};

export default Country;