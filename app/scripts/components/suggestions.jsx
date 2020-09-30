import React from 'react'
import { Card } from './card'

export const SuggestionsPanel = ({ items }) => {
  return (
    <div className='suggestions-container'>
      <a className='suggestions-top' href=''>
        <span className='search-count'>Displaying 4 of {items.length} Results</span>
        <span className='search-results'>See All Results</span>
      </a>
      <div className='cards'>
        {items.map((c) => (
          <Card key={c.id} item={c} />
        ))}
      </div>
    </div>
  )
}
