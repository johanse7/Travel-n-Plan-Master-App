import React from 'react';
import smallAirPlane from '../assets/static/small-black-plane.png';
import smallArrow from '../assets/static/small-arrow.png';
import calendar from '../assets/static/calendar.png';
import '../assets/styles/components/AirPlaneDetail.scss';

const AirPlaneDetail = ({startDate, origin, destination}) => (
        <div className="container-detail">
            <div className="container-detail-item">
                <div className="container-detail-img">
                    <img src={smallAirPlane} alt="origen" />
                </div>
                {origin &&(
                <div className="container-detail-info">
                    <p className="info-place">{origin.cityName}</p>
                    <p className="info-place-detail">{`${origin.airportName} (${origin.code})`}</p>
                </div >
                )}
            </div>
            <div className="container-detail-item" >
                <div className="container-detail-img">
                    <img src={smallArrow} alt="Destino" />
                </div>
                {destination &&(
                <div className="container-detail-info">
                    <p className="info-place">{destination.cityName}</p>
                    <p className="info-place-detail">{`${destination.airportName} (${destination.code})`}</p>
                </div >
                )}
            </div>
            <div className="container-detail-item" >
                <div className="container-detail-img">
                    < img src={calendar} alt="Fecha" />
                </div>
                <div className="container-detail-info">
                    <p className="info-place">{startDate}</p>
                    <p className="info-place-detail">Hora local</p >
                </div >
            </div>
        </div>

    );


export default AirPlaneDetail;