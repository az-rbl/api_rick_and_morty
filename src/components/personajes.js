import React, { useEffect, useState } from "react";
import axios from "axios";
import Personaje from './Personaje.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const Personajes = () => {
    const [personajes, setPersonajes] =useState([]);
    const url = "https://rickandmortyapi.com/api/character";

    useEffect(()=>{
        axios.get(url).then((response)=>{
            console.log(response.data.results);
            setPersonajes(response.data.results);
        });
    },[]);
    
    return (
<div>
        {personajes.map((character)=>{
            <li key={character.id}>
            <Personaje character={character}/>
            </li>
        })}
</div>
    );
}
export default Personajes;