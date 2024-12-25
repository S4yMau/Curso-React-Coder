//Llamamos las librerias
import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"
//Agarramos el espacio a trabajar en HTML
const el = document.getElementById("root")
// Reac toma el contorl del elemento
const root = ReactDom.createRoot(el)
//Creamos un componente
//Mostramos componente en pantalla
root.render(<App/>)   