import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import InstructorsList from "./pages/InstructorsList";
import InstructorsForm from "./pages/InstructorsForm";

function Routes() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={Main}/>
      <Route path="/learn-surf" component={InstructorsList}/>
      <Route path="/teach-surf" component={InstructorsForm}/>

    </BrowserRouter>
  );
}

export default Routes;
