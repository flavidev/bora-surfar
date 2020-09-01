import React, { useState } from "react";
import { useHistory } from "react-router-dom"

import api from "../../api";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Selection from "../../components/Selection/";
import TextArea from "../../components/TextArea/";
import LessonTime from "../../components/LessonTime";
import { compare, convertWeekValuesToNames } from "../../utils/HelperFunctions";
import "./styles.css";

function InstructorForm() {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [bio, setBio] = useState("");
  const [region, setRegion] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [weekDayShift, setWeekDayShift] = useState("");
  const [price, setPrice] = useState("");
  const [availableSchedule, setAvailableSchedule] = useState([]);
  const history = useHistory();

  async function addNewInstructor(data) {
    if (
      (username,
      profilePicture,
      whatsApp,
      bio,
      region,
      price,
      availableSchedule)
    ) {
      try {
        await api.post("/instructors", data);
      } catch (error) {
        console.log(error);
      } finally {
        history.push("/")
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }

  function addNewSchedule() {
    if (weekDay && weekDayShift) {
      const updatedSchedule = availableSchedule.filter(
        (scheduleItem) =>
          scheduleItem.day !== weekDay || scheduleItem.shift !== weekDayShift
      );

      setAvailableSchedule(
        [...updatedSchedule, { day: weekDay, shift: weekDayShift }].sort(
          compare
        )
      );
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
            placeholder="Link para uma foto que apareça o seu rosto"
          />

          <Input
            name="whatsapp"
            value={whatsApp}
            onChange={(e) => setWhatsApp(e.target.value)}
            label="WhatsApp"
            placeholder="Código da cidade + número. Ex: 21999999999"
            maxLength="11"
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
            name="region"
            label="Praias"
            onChange={(e) => setRegion(e.target.value)}
            options={[
              { value: "Zona Sul", label: "Zona Sul" },
              { value: "Barra e Zona Oeste", label: "Barra e Zona Oeste" },
              { value: "Niterói", label: "Niterói" },
              { value: "Região dos Lagos", label: "Região dos Lagos" },
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
                { value: 0, label: "Domingo" },
                { value: 1, label: "Segunda-feira" },
                { value: 2, label: "Terça-feira" },
                { value: 3, label: "Quarta-feira" },
                { value: 4, label: "Quinta-feira" },
                { value: 5, label: "Sexta-feira" },
                { value: 6, label: "Sábado" },
              ]}
            />

            <Selection
              name="week_day_shift"
              label="Turno"
              onChange={(e) => setWeekDayShift(e.target.value)}
              options={[
                { value: "m", label: "Manhã" },
                { value: "t", label: "Tarde" },
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
            <LessonTime
              key={i}
              day={convertWeekValuesToNames(item.day)}
              shift={convertWeekValuesToNames(item.shift)}
            />
          ))}
        </fieldset>

        <footer>
          <p>Todos os campos são obrigatórios</p>
          <button
            type="button"
            onClick={() => {
              addNewInstructor({
                username: username,
                profile_picture: profilePicture,
                whatsapp: whatsApp,
                bio: bio,
                region: region,
                price: price,
                days: availableSchedule.map(
                  (element) =>
                    `${convertWeekValuesToNames(
                      element.day
                    )} de ${convertWeekValuesToNames(element.shift)}`
                ),
              });
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
