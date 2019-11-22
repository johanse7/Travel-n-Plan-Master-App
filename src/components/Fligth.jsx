import React from 'react';
import { FaPlane, FaEllipsisH, FaTicketAlt, FaUserCheck, FaDollarSign } from 'react-icons/fa';
import { IoIosTimer } from "react-icons/io";
import '../assets/styles/components/Fligth.scss';

const Fligth = (props) => {
  const {
    origin,
    destination,
    category,
    totalPassenger,
    totalPrice,
    startHour,
    endHour,
    duration,
  } = props;

  return (
    <div className="fligth-container">
      <div className="fligth-header">
        <div className="fligth-info">
          <p>{origin.cityName}</p>
          <p>{origin.code}</p>
        </div>
        <div className="fligth-icon-plane">
          <FaEllipsisH />
          <FaPlane />
          <FaEllipsisH />
        </div>
        <div className="fligth-info">
          <p>{destination.cityName}</p>
          <p>{destination.code}</p>
        </div>
      </div>
      <div className="fligth-body">
        <div className="fligth-body-time">
          <span>{startHour}</span>
          <span>{endHour}</span>
        </div>
        <div className="fligth-body-info">
          <div className="fligth-body-info-detail">
            <IoIosTimer />
            <span>
              {duration}
            </span>
          </div>
          <div className="fligth-body-info-detail">
            <FaTicketAlt />
            <span>
              {category}
            </span>
          </div>
          <div className="fligth-body-info-detail">
            <FaUserCheck />
            <span>
              {`Numero de pasajeros: ${totalPassenger}`}
            </span>
          </div>
          <div className="fligth-body-info-detail">
            <FaDollarSign />
            <span>
              {`COP ${totalPrice}`}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Fligth;

