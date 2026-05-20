import { tablaalumnos } from "../models/alumnos.model.js";

tablaalumnos.create({
    nombre: "panfilo",
    calificacion: 5,
    materia: "matematicas"
});

export const test = () => console.log("si esta llamando al controlador");