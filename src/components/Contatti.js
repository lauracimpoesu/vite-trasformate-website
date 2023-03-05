import React from "react"

export const Contatti = () => {
  return (
    <div className="p-5 bg-gradient-to-r from-brand-color-light-aqua to-brand-color-light-red">
      <h1 id="" className="font-bold">
        VITE TRASFORMATE
      </h1>
      <h4 className="italic pb-5">
        Movimento Missionario In Italia e in Tutte le Nazioni
      </h4>

      <div className="md:flex md:justify-around">
        <div>
          <p className="pb-2">
            👨🏻 Responsabile: <strong>Manuel Pisanu</strong>
          </p>
          <p className="pb-2">
            ☎️ Tel/Whatsapp: <b>342 333 85 01</b>
          </p>
        </div>
        <div>
          <p className="pb-2">
            <strong>📧 vitetrasformateitalia@gmail.com</strong>
          </p>
          <p className="pb-2">📍 Palermo, 90127, Italia</p>
        </div>
      </div>
    </div>
  )
}
