import React from "react";

// useMemo hook to send back to the last page not home

const Back = () => {
  return (
    <div className="back">
      <button type="button" className="back-btn">
        <a href="/" style={{ textDecoration: "none", color: "black", paddingLeft:"7rem" }}>
          🢦
        </a>
      </button>
    </div>
  );
};

export default Back;
