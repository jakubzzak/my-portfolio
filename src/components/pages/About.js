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
            Currently, I am actively applying for a job as a <span className={dummy.link}>fullstack developer</span>.
            {/*Currently, I am working as a junior software developer for*/}
            {/*<a href='https://www.uteg.sk/' target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer"><span*/}
            {/*className={dummy.link}>UnitedTechnologies</span></a>.*/}
            <br/>
            Please feel free to check out my work below and reach out to me with any questions or comments you may have.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default About
