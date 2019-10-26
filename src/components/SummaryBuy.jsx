import React from 'react';
import { connect } from 'react-redux';
import { FaLongArrowAltRight } from 'react-icons/fa';
import smallAirPlane from '../assets/static/small-black-plane.png';
import '../assets/styles/components/SummaryBuy.scss';

const SummaryBuy = (props) => {

    const { buyAirRoute, airRouteSelected } = props;
    const { fligthScale } = buyAirRoute;
    const hasMoreThanOne = buyAirRoute.totalPassenger > 1;
    const calcTotalPrice = () => {
        return buyAirRoute.totalPassenger * fligthScale.category.price;
    };
    return (
        <section className="container-summary">
            <h2>Tu selección</h2>
            <p className="summary-count-passangers">
                {`${buyAirRoute.totalPassenger}  ${hasMoreThanOne ? 'Pasajeros' : 'Pasajero'}`}
            </p>
            <div className="summary-date">
                <img src={smallAirPlane} alt="origen" />
                {airRouteSelected.startDate}
            </div>
            {fligthScale &&
                <>
                    <div className="sumary-time-fligth">
                        <span>{fligthScale.startHour}</span>
                        <FaLongArrowAltRight />
                        <span>{fligthScale.endHour}</span>

                    </div>
                    <p> {`Duración ${fligthScale.duration}`} </p>
                    <div className="summary-total-price">
                        <p>{fligthScale.category.name}</p>
                        <p> {`Total: COP $  ${calcTotalPrice()}`}</p>
                    </div>
                </>
            }

            <button type="button"
                className="success-button"
            >
                Continuar
            </button>
        </section>
    );
};
const mapSatateToProps = (state) => {
    return {
        buyAirRoute: state.buyAirRoute,
        airRouteSelected: state.airRouteSelected
    };
}

export default connect(mapSatateToProps, null)(SummaryBuy);
