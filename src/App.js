import React, { useState, Component } from 'react';
import styles from './styles/App.module.css';
import dummy from './styles/Dummy.module.css'
import Main from './components/main';
import { Link } from 'react-router-dom';
import {Menu, Icon, Segment, Container, Sticky} from "semantic-ui-react";


const Header = () => {

    const handleItemClick = (e, { name }) => {
        window.scrollTo({
            // top: 100,
            behavior: 'smooth'
        });
    };

    return (
        <Segment inverted>
            <Menu inverted secondary size={"small"}>
                <Menu.Item
                    icon='id badge'
                    name='Jakub Žák'
                    onClick={handleItemClick}
                />
                <Menu.Menu position='right'>
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
                    <Menu.Item
                        name='About'
                        onClick={handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        </Segment>
    )
}

const App = () => {
    return (
        <div >
            <Sticky>
                <Header />
            </Sticky>
            <div className={styles.body} >
                <Main/>
            </div>
        </div>
    );
}

export default App;
