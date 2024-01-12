import React from "react";
import './progressBar.css';

function ProgressBar(props) {
  const { percent } = props;

  return (
    <React.Fragment>
      <div className="progressBar-container">
        {/* design a progress bar  */}
        <div className="progressBar-background">
          <div className="progressBar-bar" style={{ width: `${percent}%`, zIndex: '0' }}>

          </div>

          {/* style the div of percent to overlap  */}

        </div>
        <div className="progress-percentage"> {percent}% </div>
      </div>
    </React.Fragment>

  );
}

export default ProgressBar;