import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";
import './VelgKlassetrinn.css';


const VelgKlasse = ({handleClick, klassetrinn, setVisVidere, visVidere, setAnswer, setObj}) => {
     
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
        <>
        {
            //sjekker om klassetrinn er ok, deretter mappe gjennom klassene
            klassetrinn && 
            klassetrinn.map((klasse) =>(
                <CustomButton className="benButton"
                key={klasse.id}
                options={klasse}
                onClick={() =>{ 
                    //setter statene fra øverst, og funksjonen handleclick
                    setObj(klasse)  
                    setAnswer(klasse.id)
                    handleClick(klasse.id)
                    visVidereClick(visVidere)
                    
                }}
                >
                Grunnskolelærer {klasse.klassetrinn} trinn
                </CustomButton>  
            ))
        }
        </>
     );
}
 
export default VelgKlasse;