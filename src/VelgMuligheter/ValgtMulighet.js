import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import InfoButton from '../CustomButton/InfoButton';
import Modal from '../Modal/Modal';
import Muligheter from '../VelgMuligheter/Muligheter';

const ValgtMulighet = ({klasseId, semester, klassetrinn, muligheterId}) => {
    const [fagnavn, setFagnavn] = useState();
    const [emnekode, setEmneKode] = useState();
    const [studiepoeng, setStudiepoeng] = useState();
    const [isOpen, setIsOpen] = useState(false);
    
    return ( 
        
        
        <>
        
            {
                klassetrinn &&
                    
                        klassetrinn.map((oblig)=>(
                            
                            
                            oblig.id === muligheterId &&
                            
                        
                            <>
                                <CustomButton 
                                    key={oblig.id}
                                    semester={oblig.semester}
                                    klasseId = {oblig.klasseId}
                                    
                                >
                                    {oblig.semester} 

                                    {oblig.fagnavn}
                                </CustomButton>

                                <InfoButton 
                                onClick={() =>{ 
                                    setIsOpen(true)
                                    setFagnavn(oblig.fagnavn)
                                    //setSemester(oblig.semester)
                                    setEmneKode(oblig.emnekode)
                                    setStudiepoeng(oblig.studiepoeng)
                                    //setKlasseId(oblig.klasseId)
                                }}>    
                                </InfoButton>
                               
                                          
                            </>
                ))
            }
            
            <Modal 
                open= {isOpen} 
                onClose={() => setIsOpen(false)}
            >
            <h3>Info om {fagnavn}</h3><br/>

            <ul>
                <li>
                Fagnavn: {fagnavn}
                </li>
                <li>
                Emnekode: {emnekode}
                </li>
                <li>
                Studiepoeng: {studiepoeng}
                </li>
                <li>
                klassetrinn: {klasseId}
                </li>
            </ul>
        </Modal>
 
        </>
        
        
    
        
        
     );
}

export default ValgtMulighet;