import { useState  } from "react";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";
import VelgMaster from "../VelgMaster/VelgMaster";
import './VelgKlassetrinn.css';
import Illustrasjon from './Illustrasjon.png';
import VelgEmne from './VelgEmne.png';
import ToBilder from './ToBilder.png';
import Elever from './Elever.jpeg';
import Undervisning from './undervisning.jpeg';
import Praksis from './Praksis.jpeg';
import VelgKlasse from "./VelgKlasse";
import VelgStudierettning from "./VelgStudierettning";


const KlasseList = ({ handleClick}) => {

    //henter tabellen klasser og plasserer det i klassetrinn
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/klasser`);

    //setter klassetrinn til å bli answer
    const [answer, setAnswer] = useState(klassetrinn);

    //brukes til å lagre objektet
    const [obj, setObj] = useState();
    const [visVidere, setVisVidere] = useState(false);
    

    const [studieRetning, setStudieRetning] = useState();
    
    const [fagNavnStudierettning, setFagNavnStudierettning] = useState();

    // slik at det brukes/ lagres i neste komponent
  
  const [valgtObligFag, setValgtObligFag] = useState();

    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked. klasse');
        console.log(e);
        const id = e.id;
        console.log('id fra handleClick = '+id);
        
    }

    function visVidereClick(visVidere){
        console.log('vis videre klikket');
        console.log(visVidere);
        
        setVisVidere(true)
    }
    
   
     return ( 
        
        
        
<div className="applikasjon">
    
    
    <div class="row">
  <div class="column" id="Seksti">
  <img id="Illustrasjon" src={Elever} alt="Illustrasjon"/>  
  <h2 id="Innledning">Med denne veilederen kan du utforske hvordan du ønsker å legge opp studieløpet ditt her ved OsloMet. 
            Utforsk de forskjellige fagene, og se hvilke konsekvenser valgt av fag vil ha senere i studiet.
        </h2>
        <p id="Padding">Veilederen er utviklet for at alle elever skal ta riktige valg underveis i lærerutdanningen. Målet
        er at du som student skal legge opp studieløpet riktig slik at du får en master innenfor det emnet du ønsker deg. Vi vet 
        at oppbyggingen av lærerutdanningen kan være vanskelig å forstå, og dermed er denne veilederen utviklet for å visualisere
        oppbyggingen av studiet på en bedre måte. 
        </p>

        </div>
  
  <div class="column" id="Forti">
  <img id="Illustrasjon" src={Praksis} alt="Illustrasjon"/>
  <h2 id="Innledning">Hvordan bruke veilederen?
        </h2>
        <p id="Padding">
            
        <ol>
            <li>Velg studieretning, det første valget du får er om du går grunnskoleutdanning 1-7 eller grunnskoleutdanning 5-10.<br /><br /></li>
            <li>Deretter får du muligheten til å velge hvilket masteremne du vil gå opp til i 10. semester. Basert på valget du tar vil studieplanen 
        oppdatere seg med de fagene du trenger for valgt masteremne.<br /><br /></li>
            <li>Siste del er å fylle inn planen med valgfag. 
        Husk at man trenger 60 studiepoeng i syklus 1 for å ta faget videre i syklus 2. Om du har to fag kan du velge selv i semester 7.</li>
        </ol>
            yarnç
        </p>

        <p id="Bold">Scroll ned for å starte veilederen!</p>
  </div>
</div>

<div class="row" id="Start">
<div class="column" id="Hundre">
  
        
            <h3>Velg studieretning </h3>      
            <h2>Velg din studieretning ved OsloMet</h2>
            <div className='introknapp'>
            
            
                    <VelgKlasse
                     visVidere={visVidere} 
                     setVisVidere={setVisVidere} 
                     setObj={setObj} 
                     setAnswer={setAnswer}
                     klassetrinn={klassetrinn}
                    
                    />

            </div>
        </div> 
     </div> 
     {
         //om man velger 5-10
         //Bruker fagnavn for å kunne filtrere på det i obligfag
         answer===2&&
        <VelgStudierettning fagNavnStudierettning={fagNavnStudierettning} setFagNavnStudierettning={setFagNavnStudierettning} valgtObligFag={valgtObligFag} setValgtObligFag={setValgtObligFag}
        />
     }
            
            
                {
                    //gjør answer og obj til props, slik at den kan brukes i ObligFagCard
                    //answer blir klasse id, som blir satt i onClick funkjsonen
                    visVidere &&
                    <VelgMaster 
                    answer={answer}
                    obj={obj}
                    fagNavnStudierettning={fagNavnStudierettning}
                    setFagNavnStudierettning={setFagNavnStudierettning}
                    />                       
                }
            
        </div>   
          
     );
}
 
export default KlasseList;