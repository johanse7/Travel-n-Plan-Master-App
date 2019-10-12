import React from 'react';
import '../assets/styles/components/AirplaneRoutes.scss';
import planeIcon from '../assets/static/plane.png';
import arrow from '../assets/static/arrow.png';

const AirplaneRoutes = (props) => {
    const { airLineName, startDate, startHour, endHour, origin, destination } = props;

    return (
        <section className="container-routes">
            <div className="info-origin-destintation">
                <span>{origin.cityName},{origin.countryName}  </span>
                <img src={planeIcon} alt="plane" />
                <span>{destination.cityName}, {destination.countryName}</span>

            </div>
            <div className="routes-info">
                <h4>{startDate}</h4>
                <div className="routes-info-datail">
                    <div className="info-time-route">
                        <div>
                            <h3>{startHour}</h3>
                            <p>{origin.code}</p>
                            <p>{origin.cityName}</p>
                        </div>
                        <div>
                            <img src={arrow} alt="Hora local" />
                        </div>
                        <div>
                            <h3>{endHour}</h3>
                            <p>{destination.code}</p>
                            <p>{destination.cityName}</p>
                        </div>
                    </div>
                    <div className="info-price">
                        <p className="price">COP $2.500.000 </p>
                        <p className="airline">{airLineName}</p>
                        <button className="success-button">
                            Comprar
                     </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AirplaneRoutes;
