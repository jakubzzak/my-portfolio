import React, {useEffect, useState} from 'react';
import styles from './styles/App.module.css';
import dummy from './styles/Dummy.module.css'
import Main from './components/main';
import {Link} from 'react-router-dom';
import {Menu, Segment, Sticky} from "semantic-ui-react";


const Header = () => {

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
    <Segment inverted style={{backgroundColor: '#000000', position: 'fixed', top: 0, width: '100%', zIndex: 999}}>
      <Menu inverted secondary size={"small"}>
        <Menu.Item
          icon='id badge'
          name='Jakub Žák'
          onClick={handleItemClick}
        />
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
      {/*<Sticky>*/}
        <Header/>
      {/*</Sticky>*/}
      <div className={styles.body}>
        <Main/>
      </div>
    </div>
  );
}

export default App;
