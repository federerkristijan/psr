import { useState, useRef, useContext, useEffect } from "react";
import { AudioContext } from "./AudioContext";

const HomeMadeAudioPlayer = (props) => {
  const myRef = useRef();

  const [audioStatus, setAudioStatus] = useState(false);

  const { stopOthers, setStopOthers } = useContext(AudioContext);

  const startAudio = () => {
    myRef.current.play();
    setStopOthers(myRef);

    setAudioStatus(true);
  };

  useEffect(() => {
    if (stopOthers !== myRef) {
      setAudioStatus(false);

      myRef.current.load();
    }
  }, [stopOthers]);

  const pauseAudio = () => {
    myRef.current.pause();
    setAudioStatus(false);
  };

  useEffect(() => {
    console.log(myRef.current);
  }, []);

  return (
    <>
      <audio
        onEnded={() => setAudioStatus(false)}
        ref={myRef}
        src={props.src}
      />
      {audioStatus ? (
        <button onClick={pauseAudio}>⏸</button>
      ) : (
        <button onClick={startAudio}>▶</button>
      )}
      <div></div>
    </>
  );
};

export default HomeMadeAudioPlayer;
