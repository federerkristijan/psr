import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedIn from './FeaturedIn'
import Press from './Press'



const Media = () => {
  return (
    <div className='media'>
      <div className="pres">
        <Link to="/Press">{<Press/>}</Link>
      </div>
      <div className="featured">
      <Link to="/FeaturedIn">{<FeaturedIn/>}</Link>
      </div>
    </div>
  )
}

export default Media
