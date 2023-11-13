import React from "react";
import Botones from "./Botones";


const studentName = "Ronal Rojas";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>Programacion</h1>
      <h3>{studentName}</h3>
      {
        techSkills.map((skill, index) => {
          return (
            <li key={index}>{skill}</li>
          )
        })
      }
      <Botones alerts={alerts} />
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };