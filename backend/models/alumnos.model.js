import { model, Schema } from "mongoose";

const SchemaAlumnos = new Schema({
    nombre: String,
    calificacion: Number,
    materia: String
});

export const tablaalumnos = model("tabla alumnos reprobados", SchemaAlumnos);