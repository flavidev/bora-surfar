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
  const [weekday, setWeekDay] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeUntil, setTimeUntil] = useState("");
  const [price, setPrice] = useState("");
  let [availableSchedule, setAvailableSchedule] = useState([]);

  let foo = ["quarta", "05:00", "06:00"]

  function addNewSchedule() {
    if ((weekday, timeFrom, timeUntil)) {
      setAvailableSchedule([
        ...availableSchedule,
        {
          day: weekday,
          from: timeFrom,
          until: timeUntil,
        },
      ]);
    } else {
      alert("Preencha todos os campos");
    }
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
            onChange={(e) => setWhatsApp(e.target.value)}
            label="WhatsApp"
            placeholder="Somente números. Ex:999999999"
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

          <div className="schedule-item" key={availableSchedule}>
            <Selection
              name="week_day"
              label="Dia da Semana"
              onChange={(e) => setWeekDay(e.target.value)}
              options={[
                { value: "segunda", label: "Segunda-feira" },
                { value: "terça", label: "Terça-feira" },
                { value: "quarta", label: "Quarta-feira" },
                { value: "quinta", label: "Quinta-feira" },
                { value: "sexta", label: "Sexta-feira" },
                { value: "sabado", label: "Sábado" },
                { value: "domingo", label: "Domingo" },
              ]}
            />
            <Input
              name="from"
              label="De"
              type="time"
              onChange={(e) => setTimeFrom(e.target.value)}
            />
            <Input
              name="to"
              label="Até"
              type="time"
              onChange={(e) => setTimeUntil(e.target.value)}
            />
          </div>
          <button type="button" onClick={addNewSchedule}>
            Adicionar horário
          </button>
        </fieldset>

        <fieldset>
          <LessonTime day={foo} />
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
                weekday = ${weekday}\n
                timeFrom = ${timeFrom}\n
                timeUntil = ${timeUntil}\n
                price = ${price}\n
                availableSchedule = ${availableSchedule}\n`
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
