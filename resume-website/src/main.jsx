import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ResearchWork from './pages/ResearchWork'
import Skills from './pages/Skills'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/education",
    element : <Education />
  },
  {
    path : "/experience",
    element : <Experience />
  },
  {
    path : "/projects",
    element : <Projects />
  },
  {
    path : "/research_work",
    element : <ResearchWork />
  },
  {
    path : "/skills",
    element : <Skills />
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
    
    
    
  </React.StrictMode>,
)
