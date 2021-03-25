import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import Modal from '../Modal/Modal';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';
import ObligFagSemester from './oblig-fag-semester';
import './oblig-fag.css';
import Elever from './Elever.jpeg';
import ObligFagSemester2 from './ObligFagSemester2';

const ObligFagCard = ({answer, masterId, obj, fagNavn, fagNavnStudierettning}) => {

    
    
    const [visVidere, setVisVidere] = useState(false);
    
    function visVidereClick(visVidere){
        console.log('vis videre klikket');
        console.log(visVidere);
        
        setVisVidere(true)
    }
 
    return (  
        <>
<div class="row">
    <div class="column" id="Hundre">
    <h3>Obligatoriske emner</h3>
    </div>
    <div class="column" id="MasterBilde">
    </div>

    <div class="column" id="Atti">
        <h2 id="Left">Oversikt over de obligatoriske emnene i de tre første semestrene</h2>
        <p id="Beskrivelse">De tre første semesterene består kun av obligatoriske emner. Disse er felles for begge studieretninger og 
            påvirker ikke masteroppgaven. I løpet av de tre første semestrene vil alle gjennomføre eksamner i Norsk og Matematikk, 
            samt få innføring i pedagogikk. <br /><br />
            <bold>De obligatoriske emnene er listet opp under!</bold>
        </p>
    </div>  
</div>


    <div class="row">
    <div class="column" id="Hundre">
        <div className="obligatoriske semestre">
            <div classname="Seksti">
                <h5>Semester 1</h5> 
                <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
                <div className="fag">
                    { //sjekker om det er 5-10, hvis det er det vil den filtrer i ObligFagSemester2, med fagnavnet satt i VelgStudieRettning
                    answer ===2  ?(
                                <ObligFagSemester2 fagNavnStudierettning={fagNavnStudierettning} semester={1} answer={answer}/>
                            ) :(

                                // det sorterte arrayet mappes
                                <ObligFagSemester id="IkkeKnapp" semester={1} answer={answer}/>
                            )
                    }
                </div>
            </div>
            
                

       
            <div className="Forti">
                <h5>Semester 2</h5>
                <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p>
                <div className="fag">
                { //sjekker om det er 5-10, hvis det er det vil den filtrer i ObligFagSemester2, med fagnavnet satt i VelgStudieRettning
                    answer ===2  ?(
                            <ObligFagSemester2 fagNavnStudierettning={fagNavnStudierettning} semester={2} answer={answer}/>
                        ) :(

                            // det sorterte arrayet mappes
                            <ObligFagSemester id="IkkeKnapp" semester={2} answer={answer}/>
                        )
                }
                </div>
            </div>
    
        
        
            

            <div className="obligkort">
                <h5>Semester 3</h5>
                <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
                <div className="fag">
                   { //sjekker om det er 5-10, hvis det er det vil den filtrer i ObligFagSemester2, med fagnavnet satt i VelgStudieRettning
                    answer ===2  ?(
                        <ObligFagSemester2 fagNavnStudierettning={fagNavnStudierettning} semester={3} answer={answer}/>
                    ) :(

                        // det sorterte arrayet mappes
                        <ObligFagSemester id="IkkeKnapp" semester={3} answer={answer}/>
                    )
            }
                </div>
            </div>
        </div>
    </div>
    </div>

    <div class="row">
    <div class="column" id="Hundre">
    <h3>Veien Videre</h3></div>
    <div class="column" id="BygningBilde"></div>

    <div class="column" id="Atti">
        <h2 id="Left">Få oversikt over emnene du må ta, samt hvilke semestre du kan velge valgfrie emner</h2>
        <p id="Beskrivelse">Semester fire er det semesteret man først får lov til å velge fag selv. her kan du velge mellom en del ulike fag.
        Fagene du trenger for å gå opp til master er allerede lagt inn og er <bold>markert i gult. </bold> 
        Så du får muligheten til å ta et fag til og få 60 studiepoeng i det emne, det er ikke nødvendig å ha 60 studiepoeng i det valgfrie
        emne, men er en fin ting å tenke på om du får lyst til å endre studieløpet underveis i studie.
        </p>
    </div> 
</div> 


    
    <div>         
        
        {
            
           
            <VelgMuligheter fagNavn ={fagNavn} masterId={masterId} answer={answer} obj={obj}></VelgMuligheter>
            

       
        }
        
    </div>    

        
       
        </>
        
        
     );
};
export default ObligFagCard;