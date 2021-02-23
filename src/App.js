import React, { useEffect, useState, createRef } from 'react'
import styles from './styles/App.module.css'
import dummy from './styles/Dummy.module.css'
import Main from './components/Main'
import { Menu, Ref } from 'semantic-ui-react'


const App = () => {

  const contextRef = createRef()

  const [activeMenuitem, setActiveMenuItem] = useState('Jakub Žák')
  // const [lang, setLang] = useState('us')
  const [isThin, setIsThin] = useState(window.innerWidth < 852)
  const [isSuperThin, setIsSuperThin] = useState(window.innerWidth < 700)
  const [headerLink, setHeaderLink] = useState({
    justifyContent: isThin ? 'center':'left',
    width: isThin ? '100%':'',
    border: 'solid black 1em',
    borderBottom: 'none'
  })

  useEffect(() => {
    setHeaderLink({
      justifyContent: isThin ? (isSuperThin ? 'left':'center'):'left',
      width: isThin ? '100%':'',
      border: 'solid black 1em',
      borderBottom: 'none'
    })
  }, [isThin, isSuperThin])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    window.addEventListener('resize', function () {
      setIsThin(window.innerWidth < 852)
      setIsSuperThin(window.innerWidth < 700)
    })
  }, [])


  const handleItemClick = (e, { name }) => {
    const element = document.getElementById(name)
    let offsetPos = name.includes('Jakub') ? 0 : window.pageYOffset
    if (element !== null) {
      const headerOffset = isThin ? 108:58
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

      <div id={'header'} style={{
        backgroundColor: '#000',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: '10px'
      }}>
        <Menu inverted secondary className={dummy.header} style={isThin ? { display: 'grid' }:{}}>
          <Menu.Item
            className={dummy.headerLabel}
            icon='id badge'
            name='Jakub Žák'
            active={activeMenuitem === 'Jakub Žák'}
            onClick={handleItemClick}
          />
          {/*<Menu.Item>*/}
          {/*  <Flag name={lang === 'sk' ? 'us' : 'sk'} onClick={() => setLang(lang === 'sk' ? 'us' : 'sk')}*/}
          {/*        style={{ cursor: 'pointer' }}/>*/}
          {/*</Menu.Item>*/}
          <Menu.Menu className={dummy.headerLinks} position='right' style={headerLink}>
            <Menu.Item
              name='About'
              active={activeMenuitem === 'About'}
              onClick={handleItemClick}
              style={isSuperThin ? { borderLeft: 'solid white 1px' }:{}}
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
            <Menu.Item
              name='Blog'
              // disabled
              active={activeMenuitem === 'Blog'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Contact'
              active={activeMenuitem === 'Contact'}
              onClick={handleItemClick}
              style={isSuperThin ? { borderRight: 'solid white 1px' }:{}}
            />
          </Menu.Menu>
        </Menu>
      </div>

      <div className={styles.body}>
        <Ref innerRef={contextRef}>
          <div>
            <Main/>
          </div>
        </Ref>
      </div>
    </div>
  )
}

export default App
