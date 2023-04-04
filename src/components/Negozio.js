import React from 'react'
import Libro from '../media/img/libro.jpeg'
import Abbigliamento1 from '../media/img/merch.jpeg'
import Abbigliamento2 from '../media/img/merch1.jpeg'
import Abbigliamento3 from '../media/img/merch2.jpeg'
import Abbigliamento4 from '../media/img/merch3.jpeg'


export const Negozio = () => {
  return (
    <div id="negozio">
      <h1 className="text-4xl px-1 cursor-pointer hover:underline italic mt-12 mb-12 text-center font-bold text-brand-color-aqua">
        ACQUISTA IL LIBRO!
      </h1>

      <div>
        <div className="flex justify-center">
          <img src={Libro} alt="Libro di Manuel Pisanu" />
        </div>
        <div>
          <p className="m-5 text-md font-semibold italic">
            Sono nato da una breve relazione tra due adolescenti che si
            interruppe quando ero ancora nel grembo materno. Mio padre non si è
            mai preso cura di me e mi ha abbandonato per 22 anni, lasciandomi a
            crescere con mia madre e la sua famiglia. Nonostante i miei nonni
            materni mi abbiano dato il loro cognome e dei valori, l'assenza di
            un padre ha lasciato un vuoto in me. In giovane età frequentavo un
            oratorio salesiano e partecipavo alle processioni della santa
            patrona. Tuttavia, la mia adolescenza è stata difficile. <br /> Mia
            madre si sposò e andò a vivere per conto suo, lasciandomi con i
            nonni. Durante il periodo liceale iniziai a comportarmi da ribelle,
            trascurando la scuola e stringendo amicizie poco raccomandabili che
            mi coinvolsero in affari poco puliti. Ciò mi portò ad avere dei
            problemi con la legge e a subire un processo, dal quale uscii
            discolpato. <br /> <br /> Presi contatto con una persona che avrebbe
            dovuto farmi conoscere mio padre ma, poco dopo, appresi che era
            stata assassinata in un agguato mafioso. Intrapresi una vita
            dissoluta, fatta di discoteche, di fumo, di alcool e di uso
            occasionale di cocaina. Questa vita mi portò alla dipendenza e mi
            fece ricorrere persino alla cartomanzia e alla magia. Una sera, in
            seguito a una dose tagliata male, finii in ospedale. <br /> Grazie a
            Dio, mi salvai ancora una volta. Tornato a casa, cercai di condurre
            una vita più sana, mi iscrissi nuovamente a scuola conseguendo il
            diploma, ma mi ritrovai a soffrire di attacchi di panico. Prendevo
            farmaci ansiolitici e antidepressivi e la debolezza fisica mi impedì
            di portare avanti il mio sogno di conseguire la carriera militare.
            Ero in depressione e volevo farla finita. <br /> <br /> Una sera,
            lanciando un grido disperato a Dio, ho trovato un nuovo percorso
            nella vita. Durante la visita alla mia bisnonna, ho incontrato un
            cugino che mi ha parlato di Gesù e del suo potere di guarire anche
            me. Anche se inizialmente scettico, ho cominciato a leggere la
            Bibbia e a pregare con sincerità. Credo fermamente che Dio esista e
            che sia il creatore di tutto ciò che esiste. Questa convinzione mi
            ha dato la forza e la speranza di affrontare le difficoltà della
            vita e di trovare un senso nell'esistenza. La mia fede in Dio mi ha
            anche insegnato ad amare e rispettare gli altri, a cercare la verità
            e la giustizia, e a vivere con integrità e compassione. Per me, la
            fede in Dio non è solo una questione di religione, ma di relazione
            personale con il mio creatore. Sono grato per questa relazione e
            cerco sempre di viverla al meglio, seguendo i suoi comandamenti e
            mostrando amore e gentilezza verso il prossimo.
          </p>
        </div>
      </div>

      <div>
        <h1 className="hover:underline text-4xl mt-24 mb-12 text-center font-bold text-brand-color-aqua cursor-pointer">
          Abbigliamento & Accessori
        </h1>

        <div className="flex">
          <div>
            <img src={Abbigliamento1} alt="Maglia Vite Trasformate" />
          </div>
          <div>
            <img src={Abbigliamento2} alt="Cappellino Vite Trasformate" />
          </div>
          <div>
            <img
              src={Abbigliamento3}
              alt="Maglie e cappellini Vite Trasformate"
            />
          </div>
          <div>
            <img src={Abbigliamento4} alt="Merce Vite Trasformate" />
          </div>
        </div>
      </div>
    </div>
  )
}



