import React from "react"
import PrayingPhoto from "../../media/img/praying.jpg"
import CompartiPhoto from "../../media/img/senzatetto.jpg"

export default function Comparti() {
    return (
        <div className="pt-4 p-14">
            <section id="comparti">
            <h1 className="text-4xl mt-12 text-center font-bold comparti_name">Comparti</h1>
            <div className="grid grid-cols-2 mt-10">
                <div className="grid grid-cols-2 mt-10">
                        <p className="font-semibold comp-hover">Reparti</p>
                        <p className="font-semibold comp-hover">Missionario</p>
                        <p className="font-semibold comp-hover">Evangelizzazione</p>
                        <p className="font-semibold comp-hover">Missione ospedali</p>
                        <p className="font-semibold comp-hover">Case di riposo</p>
                        <p className="font-semibold comp-hover">Missione preziosa</p>
                        <p className="font-semibold comp-hover">Operazione senza tetto</p>
                        <p className="font-semibold comp-hover">Punta tutto su Gesù</p>
                        <p className="font-semibold comp-hover">L'Angolo del Sorriso</p>
                        <p className="font-semibold comp-hover">Generazione libera</p>
                        <p className="font-semibold comp-hover">Dipendenze</p>
                        <p className="font-semibold comp-hover">Missioni in Italia</p>
                        <p className="font-semibold comp-hover">Missione all'estero</p>
                        <p className="font-semibold comp-hover">Area povertà</p>
                        <p className="font-semibold comp-hover">Formazione</p>
                        <p className="font-semibold comp-hover">Sostienici</p>
                </div>
                <div className="text-lg mt-3">
                    <img
                    src={CompartiPhoto}
                     className="comp"
                    />
                </div>
            </div>

                <div className="help">
                    <h1 className="text-5xl do_you pb-4">Desideri aiutarci?</h1>
                    <p className="text-lg">
                        <span className="text-brand-color-red px-7">Puoi farlo in 5 modi:</span>  <br/><br/>
                        1) Collabora con noi entrando a far parte della squadra, unendoti nelle trasferte e facendo da referente locale.
                        <br/> 2) Fai da tramite col tuo pastore, organizzando un evento nella tua chiesa e città!
                        <br/> 3) Fai una donazione libera o programmata per l'opera missionaria ed evangelistica in Italia (per l'Iban scrivici al NR. 3423338501)
                        <br/> 4) Metti gratuitamente a disposizione della missione il tuo talento e/o la tua professionalità.
                        <br/> 5) Naturalmente, sostienici in preghiera! 🙏🏼💙❤️</p>
                </div>

            </section>
        </div>
    )
}
