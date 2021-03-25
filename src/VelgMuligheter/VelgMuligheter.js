import React, {useReducer, useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import Modal from '../Modal/Modal';
import ObligFagSemester from '../oblig-fag/oblig-fag-semester';
import Semester from '../Semester/Semester';
import Print from '../Print/Print'
import useFetch from '../useFetch';
import Muligheter from './Muligheter';
import ValgtMulighet from './ValgtMulighet';
import "bootstrap/dist/css/bootstrap.min.css";
import '../VelgKlasse/VelgKlassetrinn.css';
import '../VelgMaster/VelgMaster.css';

import './muligheter.css';
import Resultat from './Resultat';
import Semester6Psyko from '../Semester/Semester6Psyko';


const _ = require("lodash");  



const VelgMuligheter = ({masterId, answer, fagNavn}) => {

    //database fetch
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);

    const [isOpen, setIsOpen] = useState(false);



    //for å filtrere muligheter i Semester, når man ser hva man har valgt
    const [muligheterId1, setMuligheterId1] = useState();
    const [muligheterId2, setMuligheterId2] = useState();
    const [muligheterId3, setMuligheterId3] = useState();

    const [mulighetTull, setMulighetTull] = useState();
    const [mulighetTull2, setMulighetTull2] = useState();

    const [valg7Master ,setValg7Master] = useState();

    const [semester9Master, setSemester9Master] = useState();

    const [masterFagId, setMasterFagId] = useState();

    const [valgtFag4, setValgtFag4] = useState();
   
    const [empty, setEmpty] = useState();


    const [semester9Resultat, setSemester9Resultat] = useState();

    

    const [activeButton, setActiveButton] = useState();
    function handleReset(){
        setMulighetTull("");
        setActiveButton('');
        setMuligheterId1('');
      }


    // farge for for semester 6
    const [activeButton2, setActiveButton2] = useState();

    //Set semester 7 liste
    const [semesterList7, setSemesterList7] = useState();

    const [videre, setVidere] = useState(false);

    
    //lager et array som sortrer etter semester
    const iteratees = obj => obj.semester;
    const sorted = _.sortBy(klassetrinn, iteratees);

    console.log('semesterList7', semesterList7)

    console.log('masterId', masterId)

    console.log('semester9Resultat', semester9Resultat);

                    
    return ( 
        
        
        <>

<div class="row">
    <div class="column" id="Hundre">
    <h3>2. Studieår</h3>

        <h2 id="Studieaar">Obligatorisk emner på høsten og fordypning på våren</h2>
        <p id="AarBeskrivelse">
            Lorem Ipsum dorem amet.
        </p>

        <div className="obligatoriske semestre">
            <div classname="Seksti">
            <h5>Semester 3</h5>
            <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
            <div className="fag">
            {
                        // det sorterte arrayet mappes
                        <ObligFagSemester id="Gul" semester={3} answer={answer}/>
            }
        
        </div>
        </div>

            <div className="Forti">

            <h5>Semester 4</h5>
        <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p> 
        <div className='fag'>
        {
            //reset setMulighetTull i master
            <Muligheter setValg7Master setSemesterList7={setMulighetTull2} fagNavn={fagNavn}  klassetrinn={klassetrinn} sorted={sorted} semester={4} masterId={masterId}/>
        } 

        {
            //Hvis valgt masterId er 1,2,10,11,12: hvis alle fag for semesteret
            (
                //masterId ===1  || masterId ===2  || masterId ===3  || masterId ===11 || 
                fagNavn.includes('Norsk')  || fagNavn.includes('Matte')  || fagNavn.includes('Profesjonsrettet pedagogikk') ||
                masterId ===12 || masterId ===13 || masterId ===14 || masterId ===15 || 
                masterId ===16 || masterId ===17 || masterId ===24 || masterId ===25 || 
                masterId ===26 || masterId ===27 
            ) 
        ? 
            (
                <Semester 
                    setMuligheterId={setMuligheterId1} 
                    muligheterId={muligheterId1}
                    setValgtFag={setValgtFag4} 
                    valgtFag={valgtFag4} 
                    klassetrinn={klassetrinn} 
                    semester={4} 
                    klasseId ={answer}
                    activeButton={activeButton}
                    setActiveButton ={setActiveButton}
                    
                />
            ) 
        : 
            null
        }
    </div>  

            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="column" id="Hundre">
    <h3>3. Studieår</h3>

    <h2 id="Studieaar">Mulighet for studier i utlandet og fordypning i valgfrie emner</h2>
        <p id="AarBeskrivelse">
            Det tredje året på studiet er preget av at du kan velge fordypning i ønsket emne. Dette er også
            tidpunktet hvor det er mulighet for å studere fremmedspråk i utlandet. OsloMet tilbyr utveksling på en rekke
            universiteter i utlandet. Dersom du er interessert i dette oppfordrer vi til å lese mer på OsloMet sine utvekslingssider.
            <br /><br />
            For begge studieretninger har studentene mulighet til å fordype seg i ett eller flere valgfrie emner. Valgmulighetene 
            er listet opp under.

        </p>

        <div className="obligatoriske semestre">
            <div classname="Seksti">
            <h5>Semester 5</h5>
            <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p> 

            
            <div className='fag'>
        {
            <Muligheter setValg7Master setSemesterList7={setMulighetTull2} semesterList7={mulighetTull} klassetrinn={klassetrinn} sorted={sorted} semester={5} masterId={masterId}/>
        } 

        {
            (
                fagNavn.includes('Profesjonsrettet pedagogikk')|| masterId ===12 || masterId ===13 || masterId ===14 || masterId ===15 || 
                masterId ===16 || masterId ===17  || masterId ===25 || masterId ===26 || 
                masterId ===27
            ) 
        ? 
            (
                
                <Semester activeButton={activeButton} setActiveButton ={setActiveButton}  setMuligheterId={setMuligheterId2} muligheterId={muligheterId2} klassetrinn={klassetrinn} semester={5} klasseId ={answer}/>
            ) 
        : 
            null
        }

            </div>
        </div>
        
        <div className="Forti">
        <h5>Semester 6</h5>
        <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p> 
        <div className='fag'>
        
        
        {
            <Muligheter setValg7Master setSemesterList7={setMulighetTull2}  klassetrinn={klassetrinn} sorted={sorted} semester={6} masterId={masterId}/>
        } 

        {(
            //masterId ===1  || masterId ===2  || masterId ===3  || masterId ===4  || masterId ===5  ||
            fagNavn.includes('Norsk')  || fagNavn.includes('Matte')  ||fagNavn.includes('Engelsk')|| fagNavn.includes('KRLE')  ||fagNavn.includes('Kroppsøving')|| 
            //masterId ===6  || masterId ===7  || masterId ===8  || masterId ===9  || masterId ===10 || 
            fagNavn.includes('Kunst og håndverk')  || fagNavn.includes('Musikk')  ||fagNavn.includes('Naturfag')|| fagNavn.includes('Samfunnsfag')  || 

            fagNavn.includes('Pedagogikk') || masterId ===15 || masterId ===16 || masterId ===17 || masterId === 18 ||
            masterId ===19 || masterId ===20 || masterId ===21 || masterId ===22 || masterId ===23 
         ) 
         ? 
         (
             <>
            <Semester6Psyko setMasterFagId={setMasterFagId} activeButton={activeButton2} setActiveButton ={setActiveButton2} setMuligheterId={setMuligheterId3} muligheterId={muligheterId3} klassetrinn={klassetrinn} semester={6} klasseId ={answer}/>
           
                <Semester 
                setMuligheterId={setMuligheterId3} 
                muligheterId={muligheterId3}
                klassetrinn={klassetrinn} 
                semester={4} 
                klasseId ={answer}
                activeButton={activeButton2}
                setActiveButton ={setActiveButton2}
                
                
                
            />
            </>
        ) 
        : null
        }
    
    </div>  
        </div>
        {console.log('semesterList7', semesterList7)}



        
        </div>
    </div>
</div>

<div class="row">
    <div class="column" id="Hundre">
    <h3>4. Studieår</h3>

    <h2 id="Studieaar">Forberedelser til masteroppgaven</h2>
    <p id="AarBeskrivelse">
        Emnene i dette studieåret er som regel avgjørende for hvilke muligheter du har til masteroppgaven.

    </p>

        <div className="obligatoriske semestre">
            <div classname="Seksti">
        
        <h5>Semester 7</h5>
        <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p> 
        <div className='fag'>
        
        {
            <Muligheter valg7Master={valg7Master} setValg7Master={setValg7Master} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={masterId}/>
            
        } 

        
        {
            <Semester setSemesterList7={setSemesterList7}   klassetrinn={klassetrinn} semester={7} klasseId ={answer}/>
        
        }
        {
            <ObligFagSemester setSemesterList7={setSemesterList7}   semester={7} answer={answer}/>
        }
        {
            (
            /*
              kommentert ut var tidligeere, beholder i tilfelle ny løsmninng er bug
            masterId === 12 || masterId === 13 || masterId === 14 || masterId === 15 || masterId === 16 || masterId === 17 || masterId === 18 || masterId === 19 || masterId === 20 || masterId === 21 || masterId === 22 || masterId === 23 || masterId === 24 || masterId === 25 || masterId === 26 || masterId === 27*/

            //om klasseId (klassetrinn 1-7, eller klassetrinn 5-10) og pedagogikk 1-7
           answer===2 || masterId === 12 || masterId === 13 || masterId === 14
            ) 
        ? 
            (
                
                <Muligheter valg7Master={valg7Master} setValg7Master={setValg7Master} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={7} masterId={activeButton}/>
                ) 
        : 
            null
        }
        
        </div>
    </div>

    <div className="Forti">
        <h5>Semester 8</h5>
        <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p> 
        <div className='fag'>
        
        {
            //<Muligheter setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={masterId}/>
        } 

        {masterId === 1 && (
            <Semester setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} semester={8} klasseId ={answer}/>
        )
        }
        {
            
            <ObligFagSemester setSemesterList7={setSemesterList7} semester={8} answer={answer}/>

        }
        {
            //Nå vises ikke fagene for semeseter 8-9, tror id feil, kommer om man uncommenter mulighet øverst
            (
            //om klasseId (klassetrinn 1-7, eller klassetrinn 5-10) og pedagogikk 1-7
           answer===2 || masterId === 12 || masterId === 13 || masterId === 14

            /*
              kommentert ut var tidligeere, beholder i tilfelle ny løsmninng er bug
            masterId === 12 || masterId === 13 || masterId === 14 || masterId === 15 || masterId === 16 || masterId === 17 || masterId === 18 || masterId === 19 || masterId === 20 || masterId === 21 || masterId === 22 || masterId === 23 || masterId === 24 || masterId === 25 || masterId === 26 || masterId === 27*/
             
            ) 
        ? 
            (
                
                <Muligheter setValg7Master={setEmpty} setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={valg7Master}/>
                ) 
        : 
                <Muligheter setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={8} masterId={masterId}/>

        }
        
        </div>
        </div>
    </div>
    </div>
    </div>

    <div class="row">
    <div class="column" id="Hundre">
    <h3>5. Studieår</h3>

    <h2 id="Studieaar">Undervisningsfag og masteroppgaven</h2>
    <p id="AarBeskrivelse">
    Lorem Ipsum dorem amet.

</p>
        <div className="obligatoriske semestre">
            <div classname="Seksti">

        <h5>Semester 9</h5>
        <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p> 
        <div className='fag'>
        
        {
            muligheterId3 &&
            <Muligheter setValg7Master={setSemester9Master} setSemesterList7={setSemesterList7}  klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={masterFagId}/>
        } 

        {masterId ===1 && (
            <Semester setSemesterList7={setSemesterList7} klassetrinn={klassetrinn} semester={9} klasseId ={answer}/>
        )
        }
        {
            <ObligFagSemester setSemesterList7={setSemesterList7} semester={9} answer={answer}/>
        }
        {
            //om det er semeseter 2
            (
            /*
              kommentert ut var tidligeere, beholder i tilfelle ny løsmninng er bug
            masterId === 12 || masterId === 13 || masterId === 14 || masterId === 15 || masterId === 16 || masterId === 17 || masterId === 18 || masterId === 19 || masterId === 20 || masterId === 21 || masterId === 22 || masterId === 23 || masterId === 24 || masterId === 25 || masterId === 26 || masterId === 27*/
             //om klasseId (klassetrinn 1-7, eller klassetrinn 5-10) og pedagogikk 1-7
           answer===2 || masterId === 12 || masterId === 13 || masterId === 14
            ) 
        ? 
            (
                
                <Muligheter setValg7Master={setSemester9Master} setSemesterList7={setSemester9Resultat} klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={valg7Master}/>
                ) 
        : 
                <Muligheter setValg7Master={setSemester9Master} setSemesterList7={setSemester9Resultat}  klassetrinn={klassetrinn} sorted={sorted} semester={9} masterId={masterId}/>

    
    }
        </div>
    </div>
        

    <div className="Forti">
        <h5>Semester 10</h5>
        <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p> 
        <div className='fag'>
        {
           
            //hvis 
            masterFagId ? (
                <Muligheter setValg7Master setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={semester9Master}/>

            ) :
            (
                <Muligheter setValg7Master setSemesterList7={setMulighetTull}  klassetrinn={klassetrinn} sorted={sorted} semester={10} masterId={masterId}/>

            )

            
            
        } 
        
        </div>
        </div>
        </div>
    </div>
    </div>

    <div class="row">
    <div class="column" id="Hundre">

        <div className="videreknapp">
        <CustomButton onClick={() => setVidere(true)}>Se oppsummering</CustomButton>
        </div>

        <div className="sluttskjerm">
        { //Viser hele studieløpet om man trykker på videreknappen
        videre &&
        <>
        <Resultat 
            answer={answer} 
            klassetrinn={klassetrinn} 
            sorted={sorted} 
            activeButton={activeButton} 
            muligheterId1={muligheterId1} 
            muligheterId2={muligheterId2} 
            muligheterId3={muligheterId3} 
            masterId ={masterId}
            semesterList7={semesterList7}
            mulighetTull={mulighetTull}
            fagNavn={fagNavn}
            valg7Master={valg7Master}
            klasseId={answer}
            semester9Resultat={semester9Resultat}


        />
            
        </>
        }
    </div>
    </div>
    </div>
    </>
        
     );
     
};

export default VelgMuligheter;