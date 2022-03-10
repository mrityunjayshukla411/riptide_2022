import React from 'react'
import './projectSuggestions.css'
import ProjectSuggestionsDetails from './ProjectSuggestionsDetails'

function ProjectSuggestions() {
  return (
    <>
      <div className='projSugg-container'>
        <h1 className='projSugg-title'>You might also like</h1>
        <div className='projSugg-list'>
          <ProjectSuggestionsDetails/>
          <ProjectSuggestionsDetails/>
          <ProjectSuggestionsDetails/>
          <ProjectSuggestionsDetails/>
          <ProjectSuggestionsDetails/>
        </div>
      </div>
    </>
  )
}

export default ProjectSuggestions