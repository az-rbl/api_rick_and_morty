import React from "react";
import Card from 'react-bootstrap/Card'

const Personaje = ({character}) => {

return(
<li key={character.name}>
  <h5>{character.name}</h5>
  <img src ={character.image}/>
</li>
);


}

export default Personaje;