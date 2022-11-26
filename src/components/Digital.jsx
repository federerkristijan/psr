import React from 'react'

const Digital = (props) => {
  return (
    <div className="song-list">
      {/* get tracks from sanity */}
      <span style={{ fontSize: "1em", letterSpacing: "none"}}>1. song</span>
      <span>{props.track}</span>
    </div>
  )
}

export default Digital
