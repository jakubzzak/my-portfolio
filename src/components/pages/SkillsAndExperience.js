import React from 'react'
import { List, Grid, Header, Segment } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'
import Experience from '../common/Experience'


const SkillsAndExperience = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 0 15 2">
        <path d="M 0 2 C 2 2 10 2 19 2 C 17 -1 16 0 0 2"
              fill="#000000"/>
      </svg>
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
                  <Experience icon={'hand point right'} title={'Swift'} description={'One semester'} />
                  <Experience icon={'hand point right'} title={'Mssql'} description={'<a href="https://github.com/jakubzzak/gtl-db" target="_blank" style="color: red;">GTL database</a>, one semester'} />
                  <Experience icon={'hand point right'} title={'Python, Flask'} description={'<a href="https://github.com/jakubzzak/gtl-backend" target="_blank" style="color: red;">GTL backend</a>, one semester'} />
                  <Experience icon={'hand point right'} title={'React'} description={'<a href="https://github.com/jakubzzak/georgia-tech-library" target="_blank" style="color: red;">GTL frontend</a>, one semester'} />
                </List>
              </Segment>
            </Grid.Column>
            <Grid.Column textAlign={'left'} style={{minWidth: '250px'}}>
              <Segment>
                <Header textAlign={"center"}>Work</Header>
                <List divided relaxed>
                  <Experience icon={'hand point right'} title={'Java, Spring'} description={'Two years'} />
                  <Experience icon={'hand point right'} title={'React.js, Semantic-UI'} description={'Two years'} />
                  <Experience icon={'hand point right'} title={'Postgresql'} description={'Two years'} />
                  <Experience icon={'hand point right'} title={'Vue.js'} description={'A half a year'} />
                  <Experience icon={'hand point right'} title={'Laravel'} description={'A few months'} />
                  <Experience icon={'hand point right'} title={'Firebase'} description={'A few months'} />
                  <Experience icon={'hand point right'} title={'Flutter'} description={'A few months'} />
                  <Experience icon={'hand point right'} title={'Mysql'} description={'A few months'} />
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
                  <Experience icon={'hand point right'} title={'JavaFX'} description={'<a href="https://github.com/jakubzzak/socketChattingApp" target="_blank" style="color: red;">Local network chatting app</a>, a week'} />
                  <Experience icon={'hand point right'} title={'Node.js'} description={'<a href="https://www.npmjs.com/package/clocklify" target="_blank" style="color: red;">Clocklify</a>, track your working time'} />
                  <Experience icon={'hand point right'} title={'Python'} description={'<a href="https://github.com/jakubzzak/discordBot" target="_blank" style="color: red;">Discord bot Šaňo</a>, a week'} />
                  <Experience icon={'hand point right'} title={'Linux, nginx'} description={'Deploying projects, a few months'} />
                  <Experience icon={'hand point right'} title={'Raspberry pi 4'} description={'Home server, a month'} />
                  <Experience icon={'hand point right'} title={'Next.js'} description={'Custom eshop, a few months'} />
                </List>
              </Segment>
            </Grid.Column>
          </Grid>
        </Grid.Row>
      </Grid>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 14 2">
        <path d="M 0 0 C 5 0 10 0 19 0 C 4 2 1 3 0 0" fill="#000000"/>
      </svg>
    </div>
  )
}

export default SkillsAndExperience
