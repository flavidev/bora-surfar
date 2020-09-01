import React from "react";

import "./styles.css";

const LessonTime = (props) => {
  return (
    <div key={props.day+props.shift} className="lesson-block">
      <div className="lesson-item">
        <span>{props.day}</span>
        <span>{props.shift}</span>
      </div>
    </div>
  );
};

export default LessonTime;
