import React from 'react';
import {CardTitle, CardText, CardActions } from 'react-mdl';
import {Card, Grid, GridRow as Row, GridColumn as Column, Header, Button } from "semantic-ui-react";
import dummy from '../../styles/Dummy.module.css'


const Projects = (props) => {

  return (
    <Grid id={'Projects'} textAlign={"center"} style={{padding: '3em'}} className={dummy.template} >
      <Row>
        <Column>
          <Header style={{ marginBottom: '2em' }}>Projects</Header>
        </Column>
      </Row>
      <Card.Group>
        <Card style={{border: '2px black solid', borderRadius: '6px'}}>
          <CardTitle style={{
            color: '#fff',
            height: '180px',
            background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
          }}>Acadsys</CardTitle>
          <CardText>
            Kratucky popis
          </CardText>
          <CardActions>
            <Button onClick={() => window.open('https://www.acadsys.com/')}>
              <Button.Content visible>www.acadsys.com</Button.Content>
              <Button.Content hidden>visit</Button.Content>
            </Button>
          </CardActions>
        </Card>
        <Card style={{border: '2px black solid', borderRadius: '6px'}}>
          <CardTitle style={{
            color: '#fff',
            height: '180px',
            background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
          }}>Camasys</CardTitle>
          <CardText>
            Kratucky popis
          </CardText>
          <CardActions>
            <Button onClick={() => window.open('https://www.camasys.com/')}>
              <Button.Content visible>www.camasys.com</Button.Content>
              <Button.Content hidden>visit</Button.Content>
            </Button>
          </CardActions>
        </Card>
        <Card style={{border: '2px black solid', borderRadius: '6px'}}>
          <CardTitle style={{
            color: '#fff',
            height: '180px',
            background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
          }}>Rentalport</CardTitle>
          <CardText>
            Kratucky popis
          </CardText>
          <CardActions>
            <Button onClick={() => window.open('https://rentalport.com/')}>
              <Button.Content visible>www.rentalport.com</Button.Content>
              <Button.Content hidden>visit</Button.Content>
            </Button>
          </CardActions>
        </Card>
        <Card style={{border: '2px black solid', borderRadius: '6px'}}>
          <CardTitle style={{
            color: '#fff',
            height: '180px',
            background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
          }}>Test-eshop</CardTitle>
          <CardText>
            Kratucky popis
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
