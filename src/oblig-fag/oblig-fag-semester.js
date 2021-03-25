import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import InfoButton from "../CustomButton/InfoButton";
import Modal from "../Modal/Modal";
import useFetch from "../useFetch";
import "./oblig-fag.css";
const _ = require("lodash");

//Denne koomponenten gjør at man kan plotte inn semestesr og klasse id(answer) i oblig-fag-card
const ObligFagSemester = ({ answer, semester, setSemesterList7 }) => {
  const { data: klassetrinn, error, isPending } = useFetch(
    `http://localhost:5000/api/obligfag/`
  );

  const [fagnavn, setFagnavn] = useState();
  //const [semester, setSemester] = useState();
  const [emnekode, setEmneKode] = useState();
  const [studiepoeng, setStudiepoeng] = useState();
  const [klasseId, setKlasseId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  //lager et array som sortrer etter semester
  const iteratees = (obj) => obj.semester;
  const sorted = _.sortBy(klassetrinn, iteratees);

  return (
    <>
      <>
        {
          // det sorterte arrayet mappes
          sorted.map(
            (oblig) =>
              //om klasseId er det samme som answer fra KlasseList =>
              oblig.klasseId === answer &&
              oblig.semester === semester && (
                <>
                  <CustomButton id="Videre" key={oblig.id}>{oblig.fagnavn}</CustomButton>

                  <InfoButton 
                    className="infoknapp"
                    onClick={() => {
                      setIsOpen(true);
                      setFagnavn(oblig.fagnavn);
                      //setSemester(oblig.semester)
                      setEmneKode(oblig.emnekode);
                      setStudiepoeng(oblig.studiepoeng);
                      setKlasseId(oblig.klasseId);
                      
                    }}
                  ></InfoButton>
                </>
              )
          )
        }
      </>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h5>Info om {fagnavn}</h5>
        <br />

        <ul>
          <li>Fagnavn: {fagnavn}</li>
          <li>Emnekode: {emnekode}</li>
          <li>Studiepoeng: {studiepoeng}</li>
          <li>klassetrinn: {klasseId}</li>
        </ul>
      </Modal>
    </>
  );
  
};

export default ObligFagSemester;
