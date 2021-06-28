import React from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import TimelineItem from "../common/TimelineItem";


const Resume = () => {

  return (
    <Grid id={'Resume'} textAlign={"center"} style={{backgroundColor: 'black', padding: '3em'}}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header inverted style={{marginBottom: '2em'}}>Resume</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <VerticalTimeline>
            <TimelineItem title={'High school graduation'}
                          subtitle={'Secondary grammar school of Jozef Herda in Trnava, Slovakia'}
                          description={'Successfully graduated from high school, took final exam in mathematics, English and informatics'}
                          date={'May 24th 2018'}
                          icon={<Icon name={'graduation'} color={'black'} size={'big'} fitted/>}/>
            <TimelineItem title={'Accepted to collage'}
                          subtitle={'Faculty of mathematics, physics and informatics of Comenius University, Bratislava'}
                          description={'Kicked off a daily study program: Applied informatics'}
                          date={'September 17th 2018 - February 15th 2021'}
                          icon={<Icon name={'graduation'} color={'black'} size={'big'} fitted/>}/>
            <TimelineItem title={'Work and travel program'}
                          subtitle={'New Jersey, USA'}
                          description={'Two and a half months of daily interaction with people, two weeks of traveling on the east coast'}
                          date={'June 16th - September 16th 2019'}
                          icon={<Icon name={'compass'} color={'black'} size={'big'} fitted/>}/>
            <TimelineItem title={'Fullstack developer'}
                          subtitle={'At United Technologies'}
                          description={'Working on web apps using React, Spring and Postgres'}
                          date={'September 1st 2019 - July 1st 2021'}
                          icon={<Icon name={'code'} color={'black'} size={'big'} fitted/>}/>
            <TimelineItem title={'Accepted to collage'}
                          subtitle={'UCN Aalborg, Denmark'}
                          description={'Full-time student of Software development top up programme'}
                          date={'February 2nd 2021 - present'}
                          icon={<Icon name={'graduation'} color={'black'} size={'big'} fitted/>}/>
            <TimelineItem title={'Personal project'}
                          subtitle={'Cybik'}
                          description={'Working on custom eshop using Next, Spring and Postgres'}
                          date={'September 1st 2019 - July 1st 2021'}
                          icon={<Icon name={'code'} color={'black'} size={'big'} fitted/>}/>
          </VerticalTimeline>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Resume;
