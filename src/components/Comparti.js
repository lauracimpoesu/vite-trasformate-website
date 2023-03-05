import React from "react"
import CompartiPhoto from "../media/img/senzatetto.jpg"

export const Comparti = () => {
  return (
    <div className="intro__big__container pt-10">
      <h1 className="text-4xl mt-12 text-center font-bold comparti_name">
        Comparti
      </h1>

      <div className="sections flex justify-around mt-12 md:text-3xl">
        <div className="section1">
          <p className="font-semibold comp-hover">Reparti</p>
          <p className="font-semibold comp-hover">Missionario</p>
          <p className="font-semibold comp-hover ">Evangelizzazione</p>
          <p className="font-semibold comp-hover">Missione ospedali</p>
          <p className="font-semibold comp-hover">Case di riposo</p>
          <p className="font-semibold comp-hover ">Missione preziosa</p>
          <p className="font-semibold comp-hover">Operazione senza tetto</p>
          <p className="font-semibold comp-hover">Punta tutto su Gesù</p>
        </div>
        <div className="section2">
          <p className="font-semibold comp-hover ">L'Angolo del Sorriso</p>
          <p className="font-semibold comp-hover">Generazione libera</p>
          <p className="font-semibold comp-hover">Dipendenze</p>
          <p className="font-semibold comp-hover ">Missioni in Italia</p>
          <p className="font-semibold comp-hover">Missione all'estero</p>
          <p className="font-semibold comp-hover">Area povertà</p>
          <p className="font-semibold comp-hover ">Formazione</p>
          <p className="font-semibold comp-hover">Sostienici</p>
        </div>
      </div>

      <div className="intro__container pb-6">
        <div className="">
          <img
            src={CompartiPhoto}
            className="intro__pic p-4 mt-10"
            alt="Collabora con noi entrando a far parte della squadra"
          />
        </div>
        <div className="mb-10 pb-10 custom:text-2xl custom:m-9 mx-12 mt-10 pt-4 pl-5">
          <h1 className="text-4xl do_you pb-4 md:text-6xl">
            Desideri aiutarci?
          </h1>
          <p className="text-1xl">
            <span className="text-brand-color-red px-7">
              Puoi farlo in 5 modi:
            </span>{" "}
            <br />
            <br />
            <b>1</b>) Collabora con noi entrando a far parte della squadra,
            unendoti nelle trasferte e facendo da referente locale.
            <br /> <b>2</b>) Fai da tramite col tuo pastore, organizzando un
            evento nella tua chiesa e città!
            <br /> <b>3</b>) Fai una donazione libera o programmata per l'opera
            missionaria ed evangelistica in Italia (per l'Iban scrivici al NR.
            3423338501)
            <br /> <b>4</b>) Metti gratuitamente a disposizione della missione
            il tuo talento e/o la tua professionalità.
            <br /> <b>5</b>) Naturalmente, sostienici in preghiera! 🙏🏼💙❤️
          </p>
        </div>
      </div>
    </div>
  )
}
