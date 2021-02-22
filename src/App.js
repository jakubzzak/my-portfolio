import React, { useEffect, useState, createRef } from 'react'
import styles from './styles/App.module.css'
import Main from './components/Main'
import { Menu, Ref, Flag, Rail, Sticky, Card } from 'semantic-ui-react'


const App = () => {

  const contextRef = createRef()
  const [navbarVisible, setNavbarVisible] = useState(true)
  const [activeMenuitem, setActiveMenuItem] = useState('Jakub Žák')
  const [lang, setLang] = useState('us')


  useEffect(() => {
    // setNavbarVisible(window.pageYOffset + 50 <= window.innerHeight)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  window.addEventListener('scroll', function () {
    // setNavbarVisible(window.pageYOffset + 50 <= window.innerHeight)
  })

  const handleItemClick = (e, { name }) => {
    const element = document.getElementById(name)
    let offsetPos = name.includes('Jakub') ? 0 : window.pageYOffset
    if (element !== null) {
      const headerOffset = 58
      const elementPos = element.getBoundingClientRect().top
      offsetPos += elementPos - headerOffset
    }
    window.scrollTo({
      top: offsetPos,
      behavior: 'smooth',
    })
    setActiveMenuItem(name)
  }

  return (
    <div id={'my_page'}>
      {navbarVisible &&
      <div id={'header'} style={{ backgroundColor: '#000', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, padding:'10px' }}>
        <Menu inverted secondary pointing style={{ fontSize: '13px' }}>
          <Menu.Item
            icon='id badge'
            name='Jakub Žák'
            active={activeMenuitem === 'Jakub Žák'}
            onClick={handleItemClick}
          />
          <Menu.Item>
            <Flag name={lang === 'sk' ? 'us' : 'sk'} onClick={() => setLang(lang === 'sk' ? 'us' : 'sk')}
                  style={{ cursor: 'pointer' }}/>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              name='About'
              active={activeMenuitem === 'About'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Resume'
              active={activeMenuitem === 'Resume'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Projects'
              active={activeMenuitem === 'Projects'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='SkillsAndExperience'
              active={activeMenuitem === 'SkillsAndExperience'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='GetToKnowMe'
              active={activeMenuitem === 'GetToKnowMe'}
              onClick={handleItemClick}
            />
            {/*<del>*/}
              <Menu.Item
                name='Blog'
                // disabled
                active={activeMenuitem === 'Blog'}
                onClick={handleItemClick}
              />
            {/*</del>*/}
            <Menu.Item
              name='Contact'
              active={activeMenuitem === 'Contact'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
      }
      <div className={styles.body}>
        <Ref innerRef={contextRef}>
          <div>
            <Main/>
            {/*<Rail position={'right'} size={'mini'}>*/}
            {/*  <Sticky context={contextRef}>*/}
            {/*    <Card color={'orange'} className={styles.stickyComputerSidebar}>*/}
            {/*      side bar tu bude behat*/}
            {/*    </Card>*/}
            {/*  </Sticky>*/}
            {/*</Rail>*/}
          </div>
        </Ref>
      </div>
    </div>
  )
}

export default App
