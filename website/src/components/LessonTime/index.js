import React from "react";

import "./styles.css";

const LessonTime = (scheduleArray) => {
  return (
    <div key={scheduleArray} className="lesson-block">
      <div className="lesson-item">
        <span>{scheduleArray[0]}</span>
        <span>{scheduleArray[1]}</span>
        <span>{scheduleArray[2]}</span>
      </div>
    </div>
  );
};

export default LessonTime;
