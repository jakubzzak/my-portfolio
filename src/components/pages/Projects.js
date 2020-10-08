import React from 'react'
import { Card, Grid, Header } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'
import Project from '../common/Project'
import acadsysImage from '../../assets/acadsys.png'
import camasysImage from '../../assets/camasys.png'
import rentalportImage from '../../assets/rentalport.png'
// TODO: get cybik.sk screeshot


const Projects = () => {

  return (
    <Grid id={'Projects'} textAlign={'center'} style={{ padding: '3em' }}
          className={dummy.template}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: '2em' }}>Projects</Header>
        </Grid.Column>
      </Grid.Row>
      <Card.Group centered>
        <Project title={'Acadsys'} meta={'key words'} image={acadsysImage} description={'desc'}
                 onButtonClick={() => window.open('https://www.acadsys.com/')} btnVisibleLabel={'www.acadsys.com'}
                 btnHiddenLabel={'visit'}/>
        <Project title={'Camasys'} meta={'key words'} image={camasysImage} description={'desc'}
                 onButtonClick={() => window.open('https://www.camasys.com/')} btnVisibleLabel={'www.camasys.com'}
                 btnHiddenLabel={'visit'}/>
        <Project title={'Rentalport'} meta={'key words'} image={rentalportImage} description={'desc'}
                 onButtonClick={() => window.open('https://www.rentalport.com/')}
                 btnVisibleLabel={'www.rentalport.com'}
                 btnHiddenLabel={'visit'}/>
        <Project title={'Cybik'} meta={'key words'} image={acadsysImage} description={'desc'}
                 onButtonClick={() => window.open('https://www.cybik.sk/')} btnVisibleLabel={'www.cybik.sk'}
                 btnHiddenLabel={'visit'}/>
      </Card.Group>
    </Grid>
  )
}

export default Projects
