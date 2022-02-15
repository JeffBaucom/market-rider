import React from 'react'

function Loader() {

  return (
    <div className="Animation">
    <div className="Animation-frames">
      <span className="Animation-frame">--</span>
      <span className="Animation-frame">\</span>
      <span className="Animation-frame">|</span>
      <span className="Animation-frame">/</span>
    </div>
  </div>
  );
}

export default Loader;
