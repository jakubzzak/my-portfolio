import React from 'react';
import {Grid, GridColumn as Column, GridRow as Row, Header} from "semantic-ui-react";
import dummy from "../../styles/Dummy.module.css";

// icon: https://react.semantic-ui.com/elements/icon/

const About = () => {
  return (
    <Grid id={'About'} className={dummy.template} textAlign={"center"} verticalAlign={"middle"} style={{padding: '3em'}}>
      <Row>
        <Column>
          <Header style={{ marginBottom: '2em' }}>Hey!</Header>
          <p>My name is Jakub Žák and I come from Slovakia.<br/>
            I am a technology enthusiast specializing in software development,
            currently working as a junior developer for <a href={'https://www.uteg.sk/'} style={{ textDecoration: 'none' }}>UnitedTechnologies.</a><br/>
            Feel free to get in touch with me or check out my work and skills below.
          </p>
        </Column>
      </Row>
    </Grid>
  )
}

export default About;
