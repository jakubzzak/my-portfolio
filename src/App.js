import React, {useState} from 'react';
import styles from './styles/App.module.css';
import Main from './components/main';
import {Menu, Segment, Flag} from "semantic-ui-react";


const Header = () => {

  const [lang, setLang] = useState('us');

  const handleItemClick = (e, {name}) => {
    const element = document.getElementById(name)
    let offsetPos = name.includes('Jakub') ? 0 : window.pageYOffset;
    if (element !== null) {
      const headerOffset = 30;
      const elementPos = element.getBoundingClientRect().top;
      offsetPos += elementPos - headerOffset;
    }
    window.scrollTo({
      top: offsetPos,
      behavior: 'smooth'
    });
  };

  return (
    <Segment inverted style={{backgroundColor: '#000', position: 'fixed', top: 0, width: '100%', zIndex: 999}}>
      <Menu inverted secondary size={"small"} style={{}}>
        <Menu.Item
          icon='id badge'
          name='Jakub Žák'
          onClick={handleItemClick}

        />
        <Menu.Item>
          <Flag name={lang === 'sk' ? 'us' : 'sk'} onClick={() => setLang(lang === 'sk' ? 'us' : 'sk')}
                style={{cursor: 'pointer'}}/>
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
          <del>
            <Menu.Item
              name='Blog'
              disabled
              onClick={handleItemClick}
            />
          </del>
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
