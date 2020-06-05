import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Header, Content, Layout, Navigation } from "react-mdl";


class App extends Component {
	render() {
		return (
			<div className="demo-big-content">
				<Layout>
					<Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
						<Navigation>
							<Link to="/resume">Resume</Link>
							<Link to="/aboutme">About Me</Link>
							<Link to="/projects">Projects</Link>
							<Link to="/contact">Contact</Link>
							<Link to="/blog">Blog</Link>
						</Navigation>
					</Header>
					<Content>
						<div className="page-content" />
						<Main/>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default App;
