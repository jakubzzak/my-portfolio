import React from 'react';
import {CardTitle, CardText, CardActions} from 'react-mdl';
import {Card, Grid, GridRow as Row, GridColumn as Column, Header, Button} from "semantic-ui-react";
import dummy from '../../styles/Dummy.module.css'

import acadsysImage from '../../assets/acadsys.png'
import camasysImage from '../../assets/camasys.png'
import rentalportImage from '../../assets/rentalport.png'


const Projects = (props) => {

  return (
    <Grid id={'Projects'} textAlign={"center"} style={{padding: '3em'}}
          className={dummy.template}>
      <Row>
        <Column width={16}>
          <Header style={{marginBottom: '2em'}}>Projects</Header>
        </Column>
      </Row>
      <Card.Group centered>
        <Card style={{
          border: '1.5px black solid',
          borderRadius: '3px',
          width: '350px',
          boxShadow: '0px 0px 15px 15px rgba(0, 0, 0, 0.1), 0px 0px 13px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px 5px rgba(0, 0, 0, 0.5)',
          margin: '2em'
        }}>
          <CardTitle style={{
            color: '#fff',
            height: '200px',
            background: `url(${acadsysImage}) center / cover`
          }} />
          <CardText>
            <div>Acadsys</div><br/>
            Kratucky popis
          </CardText>
          <CardActions>
            <Button onClick={() => window.open('https://www.acadsys.com/')}>
              <Button.Content visible>www.acadsys.com</Button.Content>
              <Button.Content hidden>visit</Button.Content>
            </Button>
          </CardActions>
        </Card>
        <Card style={{
          border: '1.5px black solid',
          borderRadius: '3px',
          width: '350px',
          boxShadow: '0px 0px 15px 15px rgba(0, 0, 0, 0.1), 0px 0px 13px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px 5px rgba(0, 0, 0, 0.5)',
          margin: '2em'
        }}>
          <CardTitle style={{
            color: '#fff',
            height: '200px',
            background: `url(${camasysImage}) center / cover`
          }}/>
          <CardText>
            <div>Camasys</div><br/>
            <br/>
            Kratucky popis..
          </CardText>
          <CardActions>
            <Button onClick={() => window.open('https://www.camasys.com/')}>
              <Button.Content visible>www.camasys.com</Button.Content>
              <Button.Content hidden>visit</Button.Content>
            </Button>
          </CardActions>
        </Card>
        <Card style={{
          border: '1.5px black solid',
          borderRadius: '3px',
          width: '350px',
          boxShadow: '0px 0px 15px 15px rgba(0, 0, 0, 0.1), 0px 0px 13px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px 5px rgba(0, 0, 0, 0.5)',
          margin: '2em'
        }}>
          <CardTitle style={{
            color: '#fff',
            height: '200px',
            background: `url(${rentalportImage}) center / cover`
          }} />
          <CardText>
            <div>Rentalport</div><br/>
            Kratucky popis
          </CardText>
          <CardActions>
            <Button onClick={() => window.open('https://rentalport.com/')}>
              <Button.Content visible>www.rentalport.com</Button.Content>
              <Button.Content hidden>visit</Button.Content>
            </Button>
          </CardActions>
        </Card>
        <Card style={{
          border: '1.5px black solid',
          borderRadius: '3px',
          width: '350px',
          boxShadow: '0px 0px 15px 15px rgba(0, 0, 0, 0.1), 0px 0px 13px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px 5px rgba(0, 0, 0, 0.5)',
          margin: '2em'
        }}>
          <CardTitle style={{
            color: '#fff',
            height: '200px',
            background: `url(${camasysImage}) center / cover`
          }} />
          <CardText>
            <div>Cybik</div><br/>
            Kratucky popis..
          </CardText>
          <CardActions>
            <Button onClick={() => window.open('https://test-eshop.netlify.app')}>
              <Button.Content visible>www.test-eshop.com</Button.Content>
              <Button.Content hidden>visit</Button.Content>
            </Button>
          </CardActions>
        </Card>
      </Card.Group>
    </Grid>
  )
}

export default Projects;
