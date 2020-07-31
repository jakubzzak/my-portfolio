import React from 'react';
import dummy from '../../styles/Dummy.module.css'
import {Button, Card, Container, Grid, GridColumn as Column, GridRow as Row, Header} from "semantic-ui-react";
import {CardActions, CardText, CardTitle} from "react-mdl";


const Blog = () => {
  return (
    <Grid id={'Blog'} columns={1} className={dummy.template} style={{padding: '3em'}} centered>
      <Row>
        <Header>Blog</Header>
      </Row>
      <Row>
        {/*<Column>*/}
        {/*  <Container className={dummy.template}>*/}
            <Card.Group>
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
                  <Button animated={'fade'} onClick={() => window.open('https://rentalport.com/')}>
                    <Button.Content visible>www.rentalport.com</Button.Content>
                    <Button.Content hidden>visit</Button.Content>
                  </Button>
                </CardActions>
              </Card>
            </Card.Group>
          {/*</Container>*/}
        {/*</Column>*/}
      </Row>
    </Grid>
  )
}

export default Blog;
