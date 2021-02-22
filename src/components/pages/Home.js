import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { Grid, GridColumn as Column, GridRow as Row, Icon, Popup } from 'semantic-ui-react'
import profilePic from '../../assets/portrait.jpeg'
import Avatar from 'react-avatar'


const Home = () => {

  const tooltip = {
    borderRadius: 6,
    border: 'transparent',
    backgroundColor: '#888888',
  }

  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.innerHeight + 30)
  }, [])

  return (
    <Grid id={'Home'} verticalAlign={'middle'} className={styles.home} style={{ height: screenHeight }}
          textAlign={'center'} columns={2}>
      <Row style={{}}>
        <Column>
          <Avatar size={200} round={'20px'} src={profilePic} name="Jakub Zak" />
          <br/>
          <h3>Jakub Žák</h3>
          <Popup
            trigger={<Icon link size={'big'} name={'github square'} style={{ margin: '2px' }}
                           onClick={() => window.open('https://github.com/jakubzzak')}/>}
            size={'mini'}
            content='jakubzzak'
            style={tooltip}
            position='bottom center'
          />
          <Popup
            trigger={<Icon link size={'big'} name={'slack'} style={{ margin: '2px' }}/>}
            size={'mini'}
            content='jakubzzak'
            style={tooltip}
            position='bottom center'
          />
          <Popup
            trigger={<Icon size={'big'} link inverted name={'facebook official'}
                           onClick={() => window.open('https://www.facebook.com/jakub.zak.75098/')} style={{ margin: '2px' }}/>}
            size={'mini'}
            content='Jakub Zak'
            style={tooltip}
            position='bottom center'
          />
          <Popup
            trigger={<Icon size={'big'} link inverted name={'linkedin'}
                           onClick={() => window.open('https://www.linkedin.com/in/jakub-%C5%BE%C3%A1k-6b02701a0/')} style={{ margin: '2px' }}/>}
            size={'mini'}
            content='Jakub Žák'
            style={tooltip}
            position='bottom center'
          />
          <Popup
            trigger={<Icon size={'big'} link inverted name={'goodreads'}
                           onClick={() => window.open('https://www.goodreads.com/jakubzzak')}  style={{ margin: '2px' }}/>}
            size={'mini'}
            content='jakubzzak'
            style={tooltip}
            position='bottom center'
          />
          {/*onClick={event => window.location.href='www.google.com'} ---> push('path')*/}
          <Popup
            trigger={<Icon size={'big'} link inverted name={'mail'}
                           onClick={() => window.open('mailto:jakubzak@uteg.sk')}  style={{ margin: '2px' }}/>}
            size={'mini'}
            content='zak.jakub67@gmail.com'
            style={tooltip}
            position='bottom center'
          />
        </Column>
      </Row>
    </Grid>
  )
}

export default Home
