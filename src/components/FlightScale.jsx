import React, { useState } from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';
import '../assets/styles/components/FlightScale.scss';

const FlightScale = props => {
  const classNameSlected = "flight-scale-selected";
  const [classFligh, setClassFligh] = useState({
    classSelected: {},
  });

  const handleClickClassSelected = (name) => {
    debugger

      setClassFligh({
        ...classFligh,
        classSelected:{
          [name]: classNameSlected
        }
      })
  };

  return (
    <section className="Flight-Scale-container">
      <div className="Flight-Scale-type">
        <FaLongArrowAltDown />
        <span>Directo</span>
      </div>
      <div className={`Flight-Scale ${classFligh.classSelected["Directo1"] || ""}`}
           onClick={()=>handleClickClassSelected("Directo1")}
      >
        <span>Economico</span>
        <div className="Flight-Scale-price">
          <span>COP</span>
          <span>$454545</span>
        </div>
      </div>
      <div  className={`Flight-Scale ${classFligh.classSelected["Directo2"] || "" }`}
           onClick={()=>handleClickClassSelected("Directo2")}
       >
        <span>Ejecutivo</span>
        <div className="Flight-Scale-price">
          <span>COP</span>
          <span>$454545</span>
        </div>

      </div>
    </section>
  );
};

export default FlightScale;
