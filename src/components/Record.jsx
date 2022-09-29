import React, { useEffect, useState } from 'react'
import sanityClient from "../lib/client";

const Record = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    sanityClient
    .fetch(
      `*[_type ==]`
    )
  })

  return (
    <div>Record</div>
  )
}

export default Record
