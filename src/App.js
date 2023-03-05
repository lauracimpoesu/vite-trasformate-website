import React from "react"
import "./App.css"
import { Home } from "./components/Home"
import Navbar from "./components/Navbar"
import {Intro} from "./components/Intro"
import { ChiSiamo } from "./components/ChiSiamo"
import { Comparti } from "./components/Comparti"
import { Contatti } from "./components/Contatti"
import { Missione } from "./components/Missione"


export default function App() {
    return (
      <>
        <Navbar />
        <Home />
        <Intro /> 
        <ChiSiamo /> 
        <Missione /> 
        <Comparti />
        <Contatti /> 
      </>
    )
}

