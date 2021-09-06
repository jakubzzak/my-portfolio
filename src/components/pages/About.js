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
          <p>
            My name is Jakub Žák and I am a technology enthusiast specializing in software development based in Aalborg,
            Denmark.
            <br/>
            Currently, I am attending a full time top up program in Software development at UCN,
            as well as working as a Fullstack app developer at&nbsp;
            <a className="ref" href="https://www.graitor.dk/" target="_blank" rel="noopener noreferrer">
              <span className={dummy.link}>Graitor</span>
            </a>.
            <br/>
            Please feel free to check out my work below and reach out to me with any questions or comments you may have.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default About
