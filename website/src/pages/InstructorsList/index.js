import React, { useState, useEffect } from "react";
import api from "../../api";
import Header from "../../components/Header";
import InstructorItem from "../../components/InstructorItem";
import "./styles.css";

function InstructorsList() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    async function loadInstructors() {
      const res = await api.get("/instructors");
      setInstructors(res.data);
    }
    loadInstructors();
  }, []);

  return (
    <div id="page-instructors-list" className="container">
      <Header
        title="Boa! Você vai se orgulhar disso no futuro."
        description="Escolha uma fera dessas."
      >
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
        <ul>
          {instructors.map((instructor) => (
            <InstructorItem key={instructor._id} instructor={instructor} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default InstructorsList;
