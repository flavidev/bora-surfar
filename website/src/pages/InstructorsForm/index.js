import React, { useState } from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Selection from "../../components/Selection/";
import TextArea from "../../components/TextArea/";
import LessonTime from "../../components/LessonTime";

import "./styles.css";

function InstructorForm() {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [bio, setBio] = useState("");
  const [beaches, setBeaches] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [weekDayShift, setWeekDayShift] = useState("");
  const [price, setPrice] = useState("");
  let [availableSchedule, setAvailableSchedule] = useState([]);

  function addNewSchedule() {
    if (weekDay && weekDayShift) {
      const updatedSchedule = availableSchedule.filter(
        (scheduleItem) =>
          scheduleItem.day !== weekDay || scheduleItem.shift !== weekDayShift
      )

      setAvailableSchedule([
        ...updatedSchedule,
        { day: weekDay, shift: weekDayShift },
      ]);
      resetSchedule();
    }
  }

  function deleteLastSchedule() {
    setAvailableSchedule(availableSchedule.slice(0, -1));
  }

  function resetSchedule() {
    document.getElementById("week_day").value = "";
    setWeekDay("");
  }

  return (
    <div className="container" id="page-instructor-form">
      <Header
        title="Boa! Transforma vidas enquanto ganha uma bufunfa."
        description="Preencha o cadastro aí embaixo."
      />

      <main>
        <fieldset>
          <legend>Informações</legend>
          <Input
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            label="Nome"
            placeholder="Nome e sobrenome ou apelido"
          />

          <Input
            name="profile_picture"
            onChange={(e) => setProfilePicture(e.target.value)}
            label="Foto de Perfil"
            placeholder="Link para uma foto onde apareça o seu rosto"
          />

          <Input
            name="whatsapp"
            value={whatsApp}
            onChange={(e) => setWhatsApp(e.target.value)}
            label="WhatsApp"
            placeholder="Incluindo código da cidade. Ex: 21999999999"
            max-length="15"
            type="number"
          />

          <TextArea
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            label="Conta um pouco da tua história no esporte"
          />
        </fieldset>

        <fieldset>
          <legend>Quais são as tuas praias?</legend>
          <Selection
            name="beaches"
            label="Praias"
            onChange={(e) => setBeaches(e.target.value)}
            options={[
              { value: "zonasul", label: "Zona Sul" },
              { value: "zonaoeste", label: "Zona Oeste" },
              { value: "niteroi", label: "Niterói" },
              { value: "regiaodoslagos", label: "Região dos Lagos" },
            ]}
          />

          <Input
            name="cost"
            onChange={(e) => setPrice(e.target.value)}
            label="Quanto você cobra por hora de aula"
            type="number"
            placeholder="Pode ser um valor aproximado"
          />
        </fieldset>

        <fieldset>
          <legend>Disponibilidade</legend>

          <div className="schedule-itens">
            <Selection
              name="week_day"
              id="week_day"
              label="Dia da Semana"
              onChange={(e) => setWeekDay(e.target.value)}
              options={[
                { value: "Segunda-feira", label: "Segunda-feira" },
                { value: "Terça-feira", label: "Terça-feira" },
                { value: "Quarta-feira", label: "Quarta-feira" },
                { value: "Quinta-feira", label: "Quinta-feira" },
                { value: "Sexta-feira", label: "Sexta-feira" },
                { value: "Sábado", label: "Sábado" },
                { value: "Domingo", label: "Domingo" },
              ]}
            />

            <Selection
              name="week_day_shift"
              label="Turno"
              onChange={(e) => setWeekDayShift(e.target.value)}
              options={[
                { value: "manhã", label: "Manhã" },
                { value: "tarde", label: "Tarde" },
              ]}
            />
          </div>
          <div className="schedule-buttons">
            <button type="button" onClick={addNewSchedule}>
              Adicionar horário
            </button>
            <button type="button" onClick={deleteLastSchedule}>
              Apagar horário
            </button>
          </div>
        </fieldset>

        <fieldset>
          {availableSchedule.map((item, i) => (
            <LessonTime key={i} day={item.day} shift={item.shift} />
          ))}
        </fieldset>

        <footer>
          <p>Todos os campos são obrigatórios</p>
          <button
            type="button"
            onClick={() => {
              alert(
                `username = ${username}\n
                profilePicture = ${profilePicture}\n
                whatsApp = ${whatsApp}\n
                bio = ${bio}\n
                beaches = ${beaches}\n
                weekday = ${weekDay}\n
                week day shift = ${weekDayShift}\n
                price = ${price}\n
                availableSchedule = ${availableSchedule.length}\n`
              );
            }}
          >
            Cadastrar
          </button>
        </footer>
      </main>
    </div>
  );
}

export default InstructorForm;
