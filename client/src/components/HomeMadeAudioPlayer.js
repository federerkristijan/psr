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

  useEffect(() => {}, []);

  return (
    <>
      <audio
        onEnded={() => setAudioStatus(false)}
        ref={myRef}
        src={props.src}
      />
      {audioStatus ? (
        <button
          onClick={pauseAudio}
          style={{
            borderRadius: "9px",
            border: "none",
            padding: "3px",
            fontSize: "20px",
            background: "none",
          }}
        >
          ⏸
        </button>
      ) : (
        <button
          onClick={startAudio}
          style={{
            borderRadius: "9px",
            border: "none",
            padding: "3px",
            fontSize: "20px",
            background: "none",
          }}
        >
          ▶
        </button>
      )}
      <div></div>
    </>
  );
};

export default HomeMadeAudioPlayer;
