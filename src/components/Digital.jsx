import React from 'react'

const Digital = (props) => {
  return (
    <div className="song-list">
      {/* get tracks from sanity */}
      <span style={{ fontSize: "1em", letterSpacing: "none"}}>1. song</span>
      <br/>
      <span style={{ fontSize: "1em", letterSpacing: "none"}}>2. song</span>
      <br/>
      <span style={{ fontSize: "1em", letterSpacing: "none"}}>3. song</span>
      <br/>
      <span style={{ fontSize: "1em", letterSpacing: "none"}}>4. song</span>
      <br/>
      <span style={{ fontSize: "1em", letterSpacing: "none"}}>5. song</span>
      {/* <span>{props.item.multiTrack}</span> */}
    </div>
  )
}

export default Digital
