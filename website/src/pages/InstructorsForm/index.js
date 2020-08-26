import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Selection from "../../components/Selection/";
import TextArea from "../../components/TextArea/";
import "./styles.css";

function InstructorForm() {
  return (
    <div className="container" id="page-instructor-form">
      <Header
        title="Boa! Vai transformar vidas e ganhar dinheiro."
        description="Preencha o cadastro aí embaixo."
      />

      <main>
        <fieldset>
          <legend>Suas informações</legend>
          <Input name="name" label="Nome ou Apelido" />
          <Input name="profile_picture" label="Foto de Perfil" />
          <Input name="whatsapp" label="Whatsapp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Qual é a tua praia?</legend>
          <Selection
            name="beaches"
            label="Praias"
            options={[
              { value: "Zona Sul", label: "Zona Sul" },
              { value: "Zona Oeste", label: "Zona Oeste" },
              { value: "Niterói", label: "Niterói" },
              { value: "Região dos Lagos", label: "Região dos Lagos" },
            ]}
          />
          <Input name="cost" label="Quanto você cobra por hora de aula" />
        </fieldset>

        <fieldset>
          <legend>Teus Horários</legend>

          <div className="schedule-item">
            <Selection
              name="week_day"
              label="Dia da Semana"
              options={[
                { value: "0", label: "Segunda-feira" },
                { value: "1", label: "Terça-feira" },
                { value: "2", label: "Quarta-feira" },
                { value: "3", label: "Quinta-feira" },
                { value: "4", label: "Sexta-feira" },
                { value: "5", label: "Sábado" },
                { value: "6", label: "Domingo" },
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
            <button type="button">+ Adicionar Horário</button>
          </div>
        </fieldset>

        <footer>
          <p>Todos os campos são obrigatórios</p>
          <button type="button">Cadastrar</button>
        </footer>
      </main>
    </div>
  );
}

export default InstructorForm;
