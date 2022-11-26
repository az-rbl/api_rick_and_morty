import React, { useEffect, useState } from "react";
import axios from "axios";
import Personaje from './Personaje.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';



const Personajes = () => {
    const [personajes, setPersonajes] =useState([]);
    const url = "https://rickandmortyapi.com/api/character/?";
    const[numero,cambiarNumero]=useState(1);
    const[entrada,cambiarEntrada]=useState('');
    const[query, cambiarQuery]=useState("page=1")
    const[pages,cambiarPages]=useState(1)

    const ChangeNumero =(e) =>{
        if(e.target.name ==="anterior"){
            if(numero>1){
        e.preventDefault();
        console.log(numero);
        cambiarNumero(numero-1);
        cambiarQuery("page="+ (numero-1).toString()+"&name="+ entrada);}
      }
      else if(e.target.name ==="siguiente"){
        if(numero<pages){
        e.preventDefault();
        console.log(numero);
        cambiarNumero(numero+1);
        cambiarQuery("page="+ (numero+1).toString()+"&name="+ entrada);
        }
      }
      
    }

    const ChangeEntrada =(e) => {
            e.preventDefault();
            cambiarEntrada(e.target.value)
            cambiarQuery("page="+numero.toString()+"&name="+ e.target.value);

    }
    useEffect(()=>{
        let q = url + query;
          
        console.log(q)
        axios.get(q).then((response)=>{
            console.log(response.data.results);
            setPersonajes(response.data.results);
            cambiarPages(response.data.info.pages)
        });
    },[query]);
    
    return (
        <Container>
        <Button name="anterior" onClick={ChangeNumero}>Anterior</Button>
        <Button name="siguiente" onClick={ChangeNumero}>Siguiente</Button>
        <input type="text" name="Entrada" id ="Entrada" onChange={ChangeEntrada} ></input>
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