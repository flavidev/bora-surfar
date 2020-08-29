import React from "react";

import "./styles.css";


const LessonTime = (props) => {
  return (
    <div key={props.day} className="lesson-block">
      <div className="lesson-item">
        <span>{props.day}</span>
        <span>{props.from}</span>
        <span>{props.until}</span>
      </div>
    </div>
  );
};

export default LessonTime;
