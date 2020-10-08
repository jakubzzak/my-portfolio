import React from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'


const SkillsAndExperience = () => {
  return (
    <Grid id={'SkillsAndExperience'} textAlign={'center'} className={dummy.contact} inverted verticalAlign={"middle"} style={{ padding: '3em' }}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header inverted style={{ marginBottom: '2em' }}>Skills and experience</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>

      </Grid.Row>
    </Grid>
  )
}

export default SkillsAndExperience
