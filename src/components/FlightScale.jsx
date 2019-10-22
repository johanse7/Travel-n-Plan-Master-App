import React, { useState } from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';
import '../assets/styles/components/FlightScale.scss';

const FlightScale = props => {

  const {fligthScalesId, duration, startHour, endHour, typeScale, codeScale, categories } = props;
  const classNameSlected = "flight-scale-selected";
  const [classFligh, setClassFligh] = useState({
    classSelected: {},
  });

  const handleClickClassSelected = (name) => {
    debugger
    setClassFligh({
      ...classFligh,
      classSelected: {
        [name]: classNameSlected
      }
    })
  };

  return (
    <section className="Flight-Scale-container">
      <div className="Flight-Scale-type">
        <FaLongArrowAltDown />
        <span>{typeScale}</span>
      </div>
      {categories.length > 0 &&
        categories.map(item => (
          <div key={`categories${item.categoriesId}`} 
               className={`Flight-Scale ${classFligh.classSelected[`category${fligthScalesId}${item.categoriesId}`] || ""}`}
               onClick={() => handleClickClassSelected(`category${fligthScalesId}${item.categoriesId}`)}
          >
            <span>{item.name}</span>
            <div className="Flight-Scale-price">
              <span>COP</span>
              <span>${item.price}</span>
            </div>

          </div>
        ))
      }
    </section>
  );
};

export default FlightScale;
