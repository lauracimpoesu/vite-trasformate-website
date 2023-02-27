import React from 'react'

export default function Contatti() {
    return (
        <div className="bg-gradient-to-r from-brand-color-light-aqua to-brand-color-light-red pt-1 ">
            <section id="contatti">
                <h1 id="contatti" className="text-3xl m-14 font-bold p-5">VITE TRASFORMATE — <i>Movimento Missionario In Italia E
                    Tutte Le Nazioni</i>
                </h1>
            <div className="chi-siamo_container flex">
                <div>
                    {/*  photo  */}
                    <img/>
                </div>
                <div className="chi-siamo_description  px-20">
                    {/*text content*/}
                </div>
                <div className="grid grid-cols-3 md:grid-cols-2 gap-80">
                    <div className="">
                        <p>👨🏻 Responsabile: <strong>Manuel Pisanu</strong></p>
                        <p>☎️ Tel/Whatsapp: <b>342 333 85 01</b></p>
                    </div>
                    <div className="pb-20">
                        <p><strong>📧 vitetrasformateitalia@gmail.com</strong></p>
                        <p>📍 Palermo, 90127, Italia</p>

                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}
