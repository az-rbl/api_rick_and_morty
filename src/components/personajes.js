import React, { useEffect, useState } from "react";
import axios from "axios";
import Personaje from './Personaje.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'



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
        <Row className="g-4">
        {personajes.map(character=>
        <Col>
            <Personaje character={character} key ={character.id}/>
            </Col>
        )}
</Row>
    );
}
export default Personajes;