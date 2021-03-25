import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";
import VelgMaster from "../VelgMaster/VelgMaster";

const VelgStudierettning = ({ valgtObligFag, setValgtObligFag, fagNavnStudierettning, setFagNavnStudierettning }) => {
  //setter masterfag tabellen til masterFag
  const { data: masterFag, error, isPending } = useFetch(
    `http://localhost:5000/api/masterfag/`
  );



  //Sette farge valgt semester
  const [activeButton, setActiveButton] = useState();

  const onSideBtnClick = (e) => {
    setActiveButton(e.id);
    //alert(e.id);
  };

  console.log('valgtObligFag', valgtObligFag);
  console.log('fagNavnStudierettning', fagNavnStudierettning);


  return (
    <>
      

      <div class="row">
        <div class="column" id="Hundre">
          <h2>Velg et emne 5-10: </h2>
          <div className="masterfag">
            {masterFag &&
              masterFag.map((oblig) => {
                const className = activeButton === oblig.id ? "red" : "";

                return (
                  //om klasseId er det samme som answer (klassetrinn id) fra KlasseList =>
                  
                  oblig.id ===15|| 
                  oblig.id ===16|| 
                  oblig.id ===17 ?
                   (
                    <>
                      <div className="masterknapper">
                        <CustomButton
                          inverted={className}
                          key={oblig.id}
                          options={oblig}
                          activeButton={activeButton}
                          onClick={() => {
                            setValgtObligFag(oblig.id)
                            onSideBtnClick(oblig);
                            setFagNavnStudierettning(oblig.fagnavn)
                          }}
                        >
                          {oblig.fagnavn}
                        </CustomButton>
                      </div>
                    </>
                  ): null
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VelgStudierettning;
