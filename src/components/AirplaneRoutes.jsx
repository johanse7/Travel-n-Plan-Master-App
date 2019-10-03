import React from 'react';
import '../assets/styles/components/AirplaneRoutes.scss';
import planeIcon from '../assets/static/plane.png';
import arrow from '../assets/static/arrow.png';

const AirplaneRoutes = () => {
    return (
        <section className="container-routes">
            <div className="info-origin-destintation">
                <span>London,England  </span>
                <img src={planeIcon} alt="plane" />
                <span>San fancisco, USA</span>

            </div>
            <div className="routes-info">
                <h4>08 sep 2019</h4>
                <div className="routes-info-datail">
                    <div className="info-time-route">

                        <span>10:30</span>
                        <img src={arrow} alt="Hora local" />
                        <span> 22:10</span>
                    </div>
                    <span><b>Avianca</b></span>
                </div>
            </div>
        </section>
    );
};

export default AirplaneRoutes;
