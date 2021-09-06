import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { Grid, GridColumn as Column, GridRow as Row, Icon, Popup } from 'semantic-ui-react'
import profilePic from '../../assets/portrait_reduced_size.png'
import Avatar from 'react-avatar'


const Home = () => {

  const tooltip = {
    borderRadius: 6,
    border: 'transparent',
    backgroundColor: '#888888',
  }

  const [screenHeight] = useState(window.innerHeight - window.innerHeight * 0.1)
  const [profileSize, setProfileSize] = useState(window.innerWidth < 600 ? 150:250)


  useEffect(() => {
    window.addEventListener('resize', () => {
      setProfileSize(window.innerWidth < 600 ? 150:250)
      // setScreenHeight(window.innerWidth + 30)
    })
  }, [])

  return (
    <div>
      <Grid id={'Home'} verticalAlign={'middle'} className={styles.home} style={{ height: screenHeight }}
            textAlign={'center'} columns={1}>
        <Row style={{ marginTop: '10em' }}>
          <Column>
            <Avatar size={profileSize} round={'20px'} src={profilePic} name="Jakub Zak" />
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 14 2">
        <path d="M 0 0 C 5 0 10 0 19 0 C 4 2 1 3 0 0" fill="#000000"/>
      </svg>
    </div>
  )
}

export default Home
