import React, { useState } from "react";
import axios from "axios";

const Personajes = () => {
    const [personajes, setPersonajes] =useState(null);

    const getPersonajes = async () =>{
    //setPersonajes(await axios.get("https://rickandmortyapi.com/api/character"))  
    console.log(personajes)
    //setPersonajes(peticion.data.results)
    return 0;
}
getPersonajes()



    
    return (
        ["rick","morty"]
    );
}
export default Personajes;