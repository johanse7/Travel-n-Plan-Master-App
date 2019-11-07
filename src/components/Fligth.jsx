import React from 'react';
import { FaPlane, FaEllipsisH, FaTicketAlt, FaUserCheck, FaDollarSign } from 'react-icons/fa';
import { IoIosTimer } from "react-icons/io";
import '../assets/styles/components/Fligth.scss';

const Fligth = (props) => {
  return (
    <div className="fligth-container">
      <div className="fligth-header">
        <div className="fligth-info">
          <p>Los Angeles</p>
          <p>LAX</p>
        </div>
        <div className="fligth-icon-plane">
          <FaEllipsisH />
          <FaPlane />
          <FaEllipsisH />
        </div>
        <div className="fligth-info">
          <p>San francisco</p>
          <p>SFO</p>
        </div>
      </div>
      <div className="fligth-body">
        <div className="fligth-body-time">
          <span>9:30 am</span>
          <span>10:30 am</span>
        </div>
        <div className="fligth-body-info">
          <div className="fligth-body-info-detail">
            <IoIosTimer />
            <span>
              9h20m
            </span>
          </div>
          <div className="fligth-body-info-detail">
            <FaTicketAlt />
            <span>
              Clase ecomica
            </span>
          </div>
          <div className="fligth-body-info-detail">
            <FaUserCheck />
            <span>
             Numero de pasajeros: 5
            </span>
          </div>
          <div className="fligth-body-info-detail">
            <FaDollarSign />
            <span>
             COP 150000
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Fligth;

