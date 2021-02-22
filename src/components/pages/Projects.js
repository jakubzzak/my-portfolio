import React from 'react'
import { Card, Grid, Header } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'
import Project from '../common/Project'
import acadsysImage from '../../assets/acadsys.png'
import camasysImage from '../../assets/camasys.png'
import rentalportImage from '../../assets/rentalport.png'
import hpImage from '../../assets/hp_controller.png'


const Projects = () => {

  return (
    <Grid id={'Projects'} columns={1} textAlign={'center'} style={{ padding: '3em' }}
          className={dummy.template}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: '2em' }}>Projects</Header>
        </Grid.Column>
      </Grid.Row>
      <Card.Group centered>
        <Project title={'Acadsys'} tags={['web app', 'invoice', 'accounting']} image={acadsysImage} description={'Document management system'}
                 onButtonClick={() => window.open('https://www.acadsys.com/')} btnVisibleLabel={'www.acadsys.com'}
                 btnHiddenLabel={'visit'}/>
        <Project title={'Camasys'} tags={['car', 'web app']} image={camasysImage} description={'Everything your car rental company needs'}
                 onButtonClick={() => window.open('https://www.camasys.com/')} btnVisibleLabel={'www.camasys.com'}
                 btnHiddenLabel={'visit'}/>
        <Project title={'Rentalport'} tags={['web', 'car', 'broker']} image={rentalportImage} description={'Online car rental broker'}
                 onButtonClick={() => window.open('https://www.rentalport.com/')}
                 btnVisibleLabel={'www.rentalport.com'}
                 btnHiddenLabel={'visit'}/>
        <Project title={'Hp controller'} tags={['physics', 'desktop', 'school']} image={hpImage} description={'Gui for manipulation of a physics\'s machine'}
                 onButtonClick={() => window.open('https://github.com/TIS2020-FMFI/hp')} btnVisibleLabel={'www.github.com'}
                 btnHiddenLabel={'visit'}/>
      </Card.Group>
    </Grid>
  )
}

export default Projects
