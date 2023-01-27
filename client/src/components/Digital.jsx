import React, { useState } from "react";
import HomeMadeAudioPlayer from "./HomeMadeAudioPlayer";

const Digital = (props) => {
  const [track, setTrack] = useState();

  return (
    <div className="song-list">
      {/* get tracks from sanity, via HomeMadeAudioPlayer.js*/}
          <ul>
            <li style={{ fontSize: "1em", letterSpacing: "none", listStyle: "none" }} key={props._id}>
            <HomeMadeAudioPlayer>{props.song}</HomeMadeAudioPlayer> {props.price}€
            </li>
          </ul>
      {/* <br />
      <span style={{ fontSize: "1em", letterSpacing: "none" }}>2. song</span>
      <br />
      <span style={{ fontSize: "1em", letterSpacing: "none" }}>3. song</span>
      <br />
      <span style={{ fontSize: "1em", letterSpacing: "none" }}>4. song</span>
      <br />
      <span style={{ fontSize: "1em", letterSpacing: "none" }}>5. song</span> */}
      {/* <span>{props.item.multiTrack}</span> */}
    </div>
  );
};

export default Digital;
