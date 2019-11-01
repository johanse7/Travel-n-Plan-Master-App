import React from 'react';
import '../assets/styles/components/AirplaneRoutes.scss';
import { Link } from 'react-router-dom';
import planeIcon from '../assets/static/plane.png';
import arrow from '../assets/static/arrow.png';

const AirplaneRoutes = (props) => {
  const { id, airLineName, startDate, origin, destination, price } = props;

  return (
    <section className="container-routes">
      <div className="info-origin-destintation">
        <span>
{origin.cityName}
,
{origin.countryName}
{' '}
  </span>
        <img src={planeIcon} alt="plane" />
        <span>
{destination.cityName}
,
{' '}
{destination.countryName}
</span>

      </div>
      <div className="routes-info">
        <h4>{startDate}</h4>
        <div className="routes-info-datail">
          <div className="info-time-route">
            <div>
              <p>{origin.code}</p>
              <p>{origin.cityName}</p>
            </div>
            <div>
              <img src={arrow} alt="Hora local" />
            </div>
            <div>
              <p>{destination.code}</p>
              <p>{destination.cityName}</p>
            </div>
          </div>
          <div className="info-price">
            <p className="price">{`COP $${price}`}</p>
            <p className="airline">{airLineName}</p>
            <Link to={`/buyAirplane/${id}`}>
              <button
                className="success-button"
              >
                Comprar
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AirplaneRoutes;
