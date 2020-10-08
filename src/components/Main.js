import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import SkillsAndExperience from './pages/SkillsAndExperience'
import Blog from './pages/Blog.js';
// import Template from "./template";


const Main = () => {

  return (
    <div>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      <SkillsAndExperience/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Main
