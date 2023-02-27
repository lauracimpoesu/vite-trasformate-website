import React from 'react'
import PrayingPhoto from '../../media/img/praying.jpg'

export default function LaNostraMissione() {
    return (
        <div className="pt-4 p-14 bg-brand-color-light-aqua">
            <section id="la-nostra-missione">
            <h1 className="text-4xl mt-12 text-center font-bold vt_name">
                La nostra missione
            </h1>
            <div className="grid gap-2 grid-cols-2 pt-7">
                <div>
                    <img src={PrayingPhoto}
                    className="intro_picture p-4 mt-8"
                    />
                </div>
                <div className="p-11 text-lg pt-16">
                    <p>

                        In ogni regione d’Italia abbiamo individuato dei referenti e delle chiese locali alle quali
                        indirizzare le persone che ci contattano dalle zone corrispondenti.
                        <br/><br/>
                        Abbiamo collegamenti con diverse chiese; collaboriamo con diverse Missioni in Italia e
                        all’estero e con alcune Web Radio e Tv cristiane.
                        <br/><br/>
                        <span className="text-xl">
                        Oggi sono centinaia i contatti smistati in tutta Italia, e i frutti che ne derivano sono di
                        benedizione.
                        <br/><br/>

                        La nostra preghiera è che da questa Nazione si propaghi un risveglio potente, affinché sempre
                        più anime siano sottratte all’inferno e conquistate al Cielo!
                        <br/><br/>
                        Vogliamo che si inneschi un movimento che raggiunga più città possibili attraverso le vite che
                        Dio ha trasformato e trasformerà.
                        <br/><br/>

                            Vogliamo far sapere, a quanti desiderano un cambiamento, che non tutto è perduto, <br/> perché con Lui... <br/><br/>
                        “ <b>LE COSE VECCHIE SONO PASSATE; <br/> ECCO, SONO DIVENTATE NUOVE</b>”.
                        </span>

                        <br/><br/><br/>
                        <span className="text-brand-color-aqua">
                            — 2 Corinzi 5:17.
                        </span>
                    </p>
                </div>
            </div>
            </section>
        </div>
    )
}
