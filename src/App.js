import React, {useState} from 'react';
import styles from './styles/App.module.css';
import Main from './components/main';
import {Menu, Segment, Flag} from "semantic-ui-react";


const Header = () => {

  const [lang, setLang] = useState('us');

  // const [poss, setPoss] = useState()
  // const [height, setHeight] = useState()
  //
  // useEffect(() => {
  //   setHeight(window.innerHeight)
  // }, [])
  //
  // window.addEventListener('scroll', function (e) {
  //   setPoss(window.scrollY)
  // })

  const handleItemClick = (e, {name}) => {
    const element = document.getElementById(name)
    //TODO: scroll not working properly
    let offsetPos = 0;
    if (element !== null) {
      const headerOffset = 30;
      const elementPos = element.getBoundingClientRect().top;
      // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      offsetPos = elementPos - headerOffset;
    }
    console.log('el', offsetPos)
    window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
    });
  };

  return (
    <Segment inverted style={{backgroundColor: '#000', position: 'fixed', top: 0, width: '100%', zIndex: 999}}>
      <Menu inverted secondary size={"small"} style={{  }}>
        <Menu.Item
          icon='id badge'
          name='Jakub Žák'
          onClick={handleItemClick}

        />
        <Menu.Item>
          {
            lang === 'sk' &&
            <Flag name='us' onClick={() => setLang('us')} style={{ cursor: 'pointer' }} />
          }
          {
            lang === 'us' &&
            <Flag name='sk' onClick={() => setLang('sk')} style={{ cursor: 'pointer' }} />
          }
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='About'
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Resume'
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Projects'
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Blog'
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Contact'
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </Segment>
  )
}

const App = () => {
  return (
    <div id={'my_page'}>
      <Header/>
      <div className={styles.body}>
        <Main/>
      </div>
    </div>
  );
}

export default App;
