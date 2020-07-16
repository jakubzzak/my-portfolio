import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Blog from './pages/blog.js';
import Template from "./template";


const Main = () => (
    <div>
        <Home/>
        <About/>
        <Resume/>
        <Projects/>
        <Blog/>
        <Contact/>
    </div>
	// <Switch>
	// 	<Route exact path="/" component={Home} />
	// 	<Route path="/about" component={About} />
	// 	<Route path="/contact" component={Contact} />
	// 	<Route path="/projects" component={Projects} />
	// 	<Route path="/resume" component={Resume} />
	// 	<Route path="/blog" component={Blog} />
	// </Switch>
)

export default Main;
