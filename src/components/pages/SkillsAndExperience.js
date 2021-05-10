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
            <Segment>
              <Header textAlign={"center"}>School</Header>
              <List divided relaxed>
                <Experience icon={'hand point right'} title={'Python, Pygame'} description={'Three semesters'} />
                <Experience icon={'hand point right'} title={'Html, Css, JS, Php'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'C++'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'Java'} description={'Three semesters'} />
                <Experience icon={'hand point right'} title={'JavaFX'} description={'<a href="https://github.com/TIS2020-FMFI/hp" target="_blank" style="color: red;">Hp controller</a>, one semester'} />
                <Experience icon={'hand point right'} title={'C#, Windows forms'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'Postgresql'} description={'Two semesters'} />
                <Experience icon={'hand point right'} title={'Go, Haskell'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'Swift'} description={'One semester, bc thesis'} />
                <Experience icon={'hand point right'} title={'Mssql'} description={'One semester'} />
                <Experience icon={'hand point right'} title={'Python, Flask'} description={'One semester'} />
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign={'left'} style={{minWidth: '250px'}}>
            <Segment>
              <Header textAlign={"center"}>Work</Header>
              <List divided relaxed>
                <Experience icon={'hand point right'} title={'Java, Spring'} description={'Almost two years'} />
                <Experience icon={'hand point right'} title={'React.js, Semantic-UI'} description={'Almost two years'} />
                <Experience icon={'hand point right'} title={'Postgresql'} description={'Almost two years'} />
                <Experience icon={'hand point right'} title={'Vue.js'} description={'A few months'} />
                <Experience icon={'hand point right'} title={'Firebase'} description={'A few months'} />
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign={'left'} style={{minWidth: '250px'}}>
            <Segment>
            <Header textAlign={"center"}>Other</Header>
              <List divided relaxed>
                <Experience icon={'hand point right'} title={'Express.js'} description={'E-shop, a few months'} />
                <Experience icon={'hand point right'} title={'Postgresql'} description={'E-shop, a few months'} />
                <Experience icon={'hand point right'} title={'React.js, Semantic-UI'} description={'Portfolio, two months'} />
                <Experience icon={'hand point right'} title={'JavaFX'} description={'Local network chatting app, one month'} />
                <Experience icon={'hand point right'} title={'Node.js'} description={'<a href="https://www.npmjs.com/package/clocklify" target="_blank" style="color: red;">Clocklify</a>, track your working time'} />
                <Experience icon={'hand point right'} title={'Python3'} description={'Discord bot Šaňo, a week'} />
                <Experience icon={'hand point right'} title={'Linux, nginx'} description={'Configuring servers, a few months'} />
                <Experience icon={'hand point right'} title={'Raspberry pi 4'} description={'Home server, a month'} />
                <Experience icon={'hand point right'} title={'Next.js'} description={'Custom eshop, a few months'} />
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </Grid.Row>
    </Grid>
  )
}

export default SkillsAndExperience
