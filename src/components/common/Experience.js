import React from 'react'
import { Grid } from 'semantic-ui-react'


const Experience = ({ startYear, endYear, jobName, jobDescription }) => {

  return (
    <Grid>
      <Grid.Row col={4}>
        <p>{startYear} - {endYear}</p>
      </Grid.Row>
      <Grid.Row col={8}>
        <h4 style={{ marginTop: '0px' }}>{jobName}</h4>
        <p>{jobDescription}</p>
      </Grid.Row>
    </Grid>
  )
}

export default Experience
