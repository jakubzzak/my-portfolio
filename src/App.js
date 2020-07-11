import React, { useState, Component } from 'react';
import styles from './styles/App.module.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Content, Layout } from "react-mdl";
import {Menu, Icon, Segment, Container, Sticky} from "semantic-ui-react";


const Header = () => {
    const [current, setCurrent] = useState("home")

    const handleItemClick = (e, { name }) => setCurrent(name);

    return (
        <Segment inverted >
            <Menu inverted pointing secondary size={"small"} >
                <Menu.Item
                    icon='id badge'
                    name='Me'
                    active={current === 'Me'}
                    onClick={handleItemClick}
                    as={Link}
                    to={'/'}
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='resume'
                        active={current === 'resume'}
                        onClick={handleItemClick}
                        as={Link}
                        to={'/resume'}
                    />
                    <Menu.Item
                        name='aboutme'
                        active={current === 'aboutme'}
                        onClick={handleItemClick}
                        as={Link}
                        to={'/aboutme'}
                    />
                    <Menu.Item
                        name='contact'
                        active={current === 'contact'}
                        onClick={handleItemClick}
                        as={Link}
                        to={'/contact'}
                    />
                    <Menu.Item
                        name='projects'
                        active={current === 'projects'}
                        onClick={handleItemClick}
                        as={Link}
                        to={'/projects'}
                    />
                    <Menu.Item
                        name='blog'
                        active={current === 'blog'}
                        onClick={handleItemClick}
                        as={Link}
                        to={'/blog'}
                    />
                </Menu.Menu>
            </Menu>
        </Segment>
    )
}

class App extends Component {
	render() {
		return (
			<div style={{ margin: 0, padding: 0 }}>
                <Sticky>
                    <Header />
                </Sticky>
                <Container >
                    <Main/>
                </Container>
			</div>
		);
	}
}

export default App;
