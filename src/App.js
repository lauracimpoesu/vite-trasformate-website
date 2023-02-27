import React from "react"
import "./App.css"
import Navbar from "./components/nav/Navbar"
import Introduction from "./components/introduction/Introduction";
import ChiSiamo from "./components/chi-siamo/ChiSiamo";
import Home from "./components/home/Home"
import LaNostraMissione from "./components/la-nostra-missione/LaNostraMissione";
import Comparti from "./components/comparti/Comparti";
import Contatti from "./components/contatti/Contatti";

export default function App() {
    return (
        <div className="container_vt">
            <Navbar/>
            <Home />
            <Introduction />
            <ChiSiamo/>
            <LaNostraMissione />
            <Comparti />
            <Contatti />
        </div>
    )
}

