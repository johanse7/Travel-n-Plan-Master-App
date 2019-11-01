import React from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { MdFlightLand } from "react-icons/md";
import '../assets/styles/components/FlightScale.scss';
import arrow from '../assets/static/arrow.png';

const FlightScale = props => {
  const {
    fligthScalesId,
    duration,
    startHour,
    endHour,
    typeScale,
    codeScale,
    categories,
    handleClickClassSelected,
    classSelected,
  } = props;

  return (
    <section className="Flight-Scale-container">
      <div className="Flight-Scale-info">
        {codeScale === '01' ?
          (
            <div className="Flight-Scale-type-directy">
              <FaLongArrowAltDown />
              <span>{typeScale}</span>
            </div>

          ) : (
            <div className="Flight-Scale-type-stop">
              <MdFlightLand />
              <span>{typeScale}</span>
            </div>

          )}

        <div className="info-time-fligth">
          <span>{startHour}</span>
          <img src={arrow} alt="Hora local" />
          <span>{endHour}</span>
        </div>
        <div className="info-duration">
          <span>Duración</span>
          <span className="info-duration-text">{duration}</span>
        </div>
      </div>
      {categories.length > 0 &&
        categories.map(item => (
          <div key={`categories${item.categoriesId}`}
            className={`Flight-Scale ${classSelected[`category${fligthScalesId}${item.categoriesId}`] || ""}`}
            onClick={() => handleClickClassSelected(fligthScalesId, item.categoriesId)}
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
