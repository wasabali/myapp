import React, {useState, useReducer} from 'react'
import './VelgMaster.css';
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import ObligFagCard from '../oblig-fag/oblig-fag-card';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import InfoButton from '../CustomButton/InfoButton';
import Modal from '../Modal/Modal';
const _ = require("lodash");  



const VelgMaster = ({answer, studieId, fagNavnStudierettning}) => {

    //setter masterfag tabellen til masterFag
    const {data: masterFag, error, isPending} = useFetch(`http://localhost:5000/api/masterfag/`);
    
    // slik at det brukes/ lagres i neste komponent
    const [fagNavn, setFagnavn] = useState();
    const [masterId, setMasterId] = useState();
    const [visVidere, setVisVidere] = useState(false);    

    const [klasseId, setKlasseId] = useState();


     //Sette farge valgt semester
     const [activeButton, setActiveButton] = useState();
    

     const onSideBtnClick = e => {
        
        setActiveButton(e.id);
        //alert(e.id);
    };
   
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        console.log(e);
       
    }

   
    return ( 
        <>
<div class="row">
    <div class="column" id="Hundre">
    <h3>Velg Masteremne</h3>
    </div>
    <div class="column" id="Tjue">
    </div>

    <div class="column" id="Atti">
        <h2 id="Left">Velg et masteremne og se hvordan du må bygge oppstudiet for å kunne skrive masteroppgave i det valgt emnet</h2>
        <p id="Beskrivelse">Valget du gjør her vil påvirke valgmulighetene resten av studiet. For å kunne skrive master i et av de
            følgende emnene må du ha nok studiepoeng i valgt emne for å kunne skrive masteroppgave i det aktuelle faget. <br /><br />

            Du kan senere gå tilbake til denne delen og velge et annet mastermne du kunne være interessert i å skrive masteroppgave. <br /><br />

            <bold>Alle mulighetene er listet opp under!</bold>
        </p>
    </div>  
</div>


<div class="row">
    <div class="column" id="Hundre">
    <h2>Velg et masteremne: </h2> 
        <div className='masterfag'>
            {
                masterFag && masterFag.map(oblig=>{
                    const className = activeButton === oblig.id ? "red" : "";

                    return(
                        //om klasseId er det samme som answer (klassetrinn id) fra KlasseList =>
                    oblig.klasseId === answer &&
                    
                    
                    <>
                    
                    <div className='masterknapper'>
                        <CustomButton
                            inverted={className}
                            key={oblig.id}
                            options={oblig}
                            activeButton={activeButton}
                                        
                            onClick={() =>{
                                handleClick(oblig)
                                setMasterId(oblig.id)
                                setFagnavn(oblig.fagnavn)
                                setVisVidere(true)
                                onSideBtnClick(oblig)
                                
                            }}
                            >
                            {oblig.fagnavn}
                        </CustomButton>
                    </div>    
                </>


                    )
                    
                        })
            }       
        </div>
    </div>
</div>
        
        
        {   
            visVidere&&
            <ObligFagCard fagNavnStudierettning={fagNavnStudierettning} masterId={masterId} fagNavn={fagNavn} answer={answer}/>
        
        }
        
        
        
       
        
        </>

        
        
     );
};
export default VelgMaster;
