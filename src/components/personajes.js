import React, { useEffect, useState } from "react";
import axios from "axios";
import Personaje from './Personaje.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';



const Personajes = () => {
    const [personajes, setPersonajes] =useState([]);
    const url = "https://rickandmortyapi.com/api/character/?page=";
    const[numero,cambiarNumero]=useState(1);

    useEffect(()=>{
        let q = url + numero.toString();
          
        console.log(q)
        axios.get(q).then((response)=>{
            console.log(response.data.results);
            setPersonajes(response.data.results);
        });
    });
    
    return (
        <Container>
        <Button onClick={()=>cambiarNumero(numero-1)}>Anterior</Button>
        <Button onClick={()=>cambiarNumero(numero+1)}>Siguiente</Button>
        <Row className="g-4">
        {personajes.map(character=>
        <Col>
            <Personaje character={character} key ={character.id}/>
            </Col>
        )}
</Row>
</Container>
    );
}
export default Personajes;