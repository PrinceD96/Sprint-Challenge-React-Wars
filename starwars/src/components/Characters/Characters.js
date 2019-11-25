import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, CardDeck, Card, CardHeader, CardBody, CardText, CardLink } from 'reactstrap';
import axios from 'axios';
import './Characters.css';
import Films from './Films/Films';


const Character = () => {
  const [apiURL, setApiUrl] = useState('https://swapi.co/api/people/');
  const [character, setCharacter] = useState([]);
  const [characterPage, setCharacterPage] = useState();

  useEffect(() => {
    axios
      .get(apiURL)
      .then(response => {
        setCharacter(response.data.results)
        setCharacterPage(response.data)
        console.log(response.data)
      })
      .catch(error => console.log('Something went wrong.', error)
      )
  }, [apiURL]);

  const next = () => {
    if (characterPage.next) {
      console.log(characterPage.next)
      setApiUrl(characterPage.next)
    } else {
      console.log('This is the last page')
    }
  }

  const previous = () => {
    if (characterPage.previous) {
      console.log(characterPage.previous)
      setApiUrl(characterPage.previous)
    } else {
      console.log('No previous page exists')
    }
  }

  return (
    <Container>
      <Row >
        <div className="btn__container">
          <Button onClick={previous}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </div>
        <CardDeck>
          {character.map(char => {
            return (
              <Col s="12" md="6" lg="4" key={char.name} className='col'>
                <Card >
                  <CardHeader>
                    <h4>{char.name}</h4>
                  </CardHeader>
                  <CardBody className="char__card">
                    <CardText>Birth Year: {char.birth_year}</CardText>
                    <CardText>Eye Color: {char.eye_color}</CardText>
                    <CardText>Gender: {char.gender}</CardText>
                    <CardText>Hair Color: {char.hair_color}</CardText>
                    <CardText>Skin Color: {char.skin_color}</CardText>
                    <CardText>Height: {char.height}</CardText>
                    <CardText>Mass: {char.mass}</CardText>
                    <CardText>Created: {char.created}</CardText>
                    <CardText>Edited: {char.edited}</CardText>
                    <CardText>Homeworld:<CardLink href="{char.homeworld}"> {char.homeworld}</CardLink></CardText>
                    <Films films={char.films}></Films>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </CardDeck>

      </Row>
    </Container >

  );
}

export default Character