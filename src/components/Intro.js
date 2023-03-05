import React from "react"
import IntroductionPhoto from "../media/img/introduction.jpeg"

export const Intro = () => {
  return (
    <div className="intro__big__container">
      <h1 className="mt-12 text-center vt_name">VITE TRASFORMATE </h1>

      <div className="intro__container">
        <div className="intro__container__pic">
          <img src={IntroductionPhoto} className="intro__pic p-4" alt="intro" />
        </div>
        <div className="intro__content custom:text-2xl custom:m-9 mx-12 mt-4 pl-5">
          <h1 className="mb-4 how">Com'è nato?</h1>
          <p>
            <span className="">Vite Trasformate</span> è un progetto che prende
            forma <i>dal cuore di un ragazzo</i>. Un cuore rotto e restaurato
            dal Signore, che batte forte per i perduti. Il suo nome è{" "}
            <span className="font-bold text-brand-color-red">
              Manuel Pisanu
            </span>
            .
          </p>
          <br />
          <p className="text-md">
            …Tutto cominciò dal pezzetto di carta che qualcuno gli mise tra le
            mani mentre si trovava in missione in Togo (Africa) nel 2015:{" "}
            <span className="text-brand-color-red italic">
              “Ecco, io sto per fare una cosa nuova” – c’era scritto – “Essa sta
              per germogliare; non la riconoscerete? Sì, io aprirò una strada
              nel deserto, farò scorrere dei fiumi nella steppa”
            </span>
            <span className="text-brand-color-red">(Isaia 43:19)</span>.
          </p>
          <br />
          <p>
            Inizialmente non comprese, ma quel versetto, anni dopo e in seguito
            a vicissitudini non facili, <b>si è compiuto</b>. <br /> Ѐ diventato
            una realtà <i>per chi</i> - come Manuel - ha sperimentato un forte
            cambiamento nella sua vita, e una promessa per chi ancora vuole
            realizzarlo.
          </p>
        </div>
      </div>
    </div>
  )
}
