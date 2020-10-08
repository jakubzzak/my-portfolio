import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'


const About = () => {
  return (
    <Grid id={'About'} className={dummy.template} textAlign={'center'} verticalAlign={'middle'}
          style={{ padding: '3em' }}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: '2em' }}>Hey!</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>My name is Jakub Žák and I come from Slovakia.<br/>
            I am a technology enthusiast specializing in software development,
            currently working as a junior developer for <a href={'https://www.uteg.sk/'}
                                                           style={{ textDecoration: 'none' }}>UnitedTechnologies.</a><br/>
            Feel free to get in touch with me or check out my work and skills below.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default About
