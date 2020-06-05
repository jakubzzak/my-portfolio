import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Blog from './pages/blog.js';


const Main = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/aboutme" component={AboutMe} />
		<Route path="/contact" component={Contact} />
		<Route path="/projects" component={Projects} />
		<Route path="/resume" component={Resume} />
		<Route path="/blog" component={Blog} />
	</Switch>
)

export default Main;
