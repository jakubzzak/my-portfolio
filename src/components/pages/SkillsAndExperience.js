import React from 'react'
import { List, Grid, Header, Segment } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'
import Experience from '../common/Experience'


const SkillsAndExperience = () => {
  return (
    <Grid id={'SkillsAndExperience'} textAlign={'center'} className={dummy.contact} inverted stackable
          verticalAlign={'middle'}
          style={{ padding: '3em 1em' }}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header inverted style={{ marginBottom: '2em' }}>Skills and experience</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid columns={3} stackable>
          <Grid.Column textAlign={'left'} style={{minWidth: '250px'}}>
            <Header inverted>School</Header>
            <Segment>
              <List divided relaxed>
                <Experience icon={'hand point right'} title={'Python, Pygame'} description={'Three semesters'} />
                <Experience icon={'hand point right'} title={'Php'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'C++'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'Java, JavaFX'} description={'Two semester'} />
                <Experience icon={'hand point right'} title={'JavaFX'} description={'Team project based on scrum, one semester'} />
                <Experience icon={'hand point right'} title={'C#, Windows forms'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'Postgresql'} description={'Two semesters'} />
                <Experience icon={'hand point right'} title={'Html, Css, JS'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'Go, Haskell'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'Swift'} description={'One semester, bc thesis'} />
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign={'left'} style={{minWidth: '250px'}}>
            <Header inverted>Work</Header>
            <Segment>
              <List divided relaxed>
                <Experience icon={'hand point right'} title={'Java, Spring'} description={'Over a year'} />
                <Experience icon={'hand point right'} title={'React.js, Semantic-UI'} description={'Over a year'} />
                <Experience icon={'hand point right'} title={'Postgresql'} description={'Over a year'} />
                <Experience icon={'hand point right'} title={'Vue.js'} description={'A few months'} />
                <Experience icon={'hand point right'} title={'Firebase'} description={'A few months'} />
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign={'left'} style={{minWidth: '250px'}}>
            <Header inverted>Other</Header>
            <Segment>
              <List divided relaxed>
                <Experience icon={'hand point right'} title={'Vue.js, Vuetify/Buetify'} description={'E-shop, a few months'} />
                <Experience icon={'hand point right'} title={'Express.js'} description={'E-shop, a few months'} />
                <Experience icon={'hand point right'} title={'Postgresql'} description={'E-shop, a few months'} />
                <Experience icon={'hand point right'} title={'React.js, Semantic-UI'} description={'Portfolio, two months'} />
                <Experience icon={'hand point right'} title={'JavaFX'} description={'Local network chatting app, one month'} />
                <Experience icon={'hand point right'} title={'Node.js'} description={'Npm package for tracking your working time'} />
                <Experience icon={'hand point right'} title={'python3'} description={'Discord bot Šaňo, a week'} />
                <Experience icon={'hand point right'} title={'linux, nginx'} description={'Configuring servers, a few months'} />
                <Experience icon={'hand point right'} title={'raspberry pi 4'} description={'Home server, a month'} />
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </Grid.Row>
    </Grid>
  )
}

export default SkillsAndExperience
