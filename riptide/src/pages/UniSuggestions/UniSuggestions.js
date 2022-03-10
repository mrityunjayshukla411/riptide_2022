import React from 'react'
import './uniSuggestions.css'
import UniSuggName from './UniSuggName'

function UniSuggestions() {
  return (
    <div>
      <div className='uniSugg-container'>
        <h1 className='uniSugg-title'>Suggested Universities</h1>
        <div className='uniSugg-list'>
          <UniSuggName/>
          <UniSuggName/>
          <UniSuggName/>
          <UniSuggName/>
          <UniSuggName/>
          <UniSuggName/>

        </div>
      </div>
    </div>
  )
}

export default UniSuggestions