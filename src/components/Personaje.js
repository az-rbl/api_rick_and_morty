import React from "react";
import Card from 'react-bootstrap/Card'

const Personaje = ({character}) => {

return(
<Card  bg = 'dark' text = 'white' style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Img src ={character.image}/>
  <Card.Title>{character.name}</Card.Title>
  <Card.Text>{character.status} </Card.Text>
  <Card.Text>{character.species} </Card.Text>
  </Card.Body>
</Card>
);


}

export default Personaje;