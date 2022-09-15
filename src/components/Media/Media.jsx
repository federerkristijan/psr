import React from 'react'
import { Link } from 'react-router-dom'
import Featured from './Featured'
import Press from './Press'

import "./Media.css";



const Media = () => {
  return (
    <div className='media'>
      <div className="pres">
        <Link to="/media/press">Press</Link>
      </div>
      <div className="featured">
      <Link to="/media/featured">Featured in other medias</Link>
      </div>
    </div>
  )
}

export default Media
