import React from "react";

import "./styles.css";

import Header from "../../components/Header";
import InstructorItem from "../../components/InstructorItem";

function InstructorsList() {
  return (
    <div id="page-instructors-list" className="container">
      <Header text="As feras que ensinam">
        <form id="search-instructors">
          <div className="input-block">
            <label htmlFor="beach">Praia</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>
      <main>
        <InstructorItem />
        <InstructorItem />
        <InstructorItem />
      </main>
    </div>
  );
}

export default InstructorsList;
