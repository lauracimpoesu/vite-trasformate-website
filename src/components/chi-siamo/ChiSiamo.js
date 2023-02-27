import React from 'react'
import ChiSiamoPhoto from '../../media/img/coverrrr.jpg'

export default function ChiSiamo() {
    return (
        <div className="pt-4">
            <section id="chi-siamo">
            <div className="chi-siamo_container grid-cols-2">
                <div className="flex chi_siamo_photo">
                    <img src={ChiSiamoPhoto}
                    />
                </div>
                <div className="chi-siamo_description text-lg m-5 pt-14 px-48 pb-1">
                    <p>
                        Il progetto missionario "Vite Trasformate" è un movimento missionario formato da credenti
                        provenienti da varie parti d’Italia, da chiese e da vissuti diversi; storie più o meno
                        difficili, tutte accomunate da un punto di svolta: <span className="font-bold underline"> l’incontro personale con Dio </span>,
                        <span className="font-bold"> che ha
                        stravolto la nostra vita</span>.
                    </p>
                    <p className="mt-5 text-xl vt_details">
                        <b>Si tratta di un ministero di recupero e di evangelizzazione: abbiamo un centralino attivo h24 e
                        ci occupiamo di raggiungere coloro che non conoscono l'Amore di Dio o che si sono allontanati da
                        Lui, per incoraggiarli, incontrarli, seguirli, introdurli nelle chiese.</b>
                    </p>
                    <p className="mt-5">
                        Evangelizziamo sui <i>socials</i>, su <i>strada</i>, negli <i>ospedali</i>, nelle <i>case di riposo</i>, tra i <i>senzatetto</i> e i <i>bisognosi</i> in
                        generale.
                    </p>
                    <p className="mt-5">
                        <span className="text-lg"> Nei fine settimana viaggiamo per presentare il nostro lavoro, condividere le nostre storie e
                        visitare le comunità che ci invitano, per essere incoraggiate e/o supportate
                        nell’evangelizzazione. </span>
                    </p>

                    <p className="my-5">Promuoviamo l’organizzazione di eventi cristiani e campagne evangelistiche. <br/><br/>

                        Per grazia di Dio, dalla Sicilia quest'opera si è estesa, e la squadra si è allargata con
                        collaboratori e gruppi dislocati in tutta Italia. Le richieste che ci pervengono in numero
                        sempre maggiore, infatti, non provengono soltanto dalle nostre zone, ma da tutta la Nazione.</p>

                </div>


            </div>
            </section>
        </div>
    )
}
