import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IoIosAdd, IoIosRemoveCircle } from "react-icons/io";
import FlightScale from '../components/FlightScale';
import { setBuyRoute } from '../actions/index';
import '../assets/styles/components/FormBuy.scss';

const MIN_PASSENGER = 1;

const FormBuy = (props) => {

    const {airRouteSelected} = props;

    const [form, setValues] = useState({
        totalPassenger: MIN_PASSENGER,
    });
    useEffect(() => {
        props.setBuyRoute(form);
    });
    const handleClickAdd = () => {
        setValues({
            ...form,
            totalPassenger: form.totalPassenger + 1,
        });
    }
    const handleClickRemove = () => {
        if (form.totalPassenger > MIN_PASSENGER) {
            setValues({
                ...form,
                totalPassenger: form.totalPassenger - 1,
            });
        }
    }
    return (
        <div className="container-formBuy">
            <div className="container-selection">
                <span>Pasajeros</span>
                <div className="counter">{form.totalPassenger}</div>
            </div>
            <h3>Diligencia tu compra</h3>
            <div>
                <div className="counter-selection">
                    <div className="counter-selection">

                        <button type="button"
                            className="success-button"
                            onClick={handleClickAdd}
                        >
                            <IoIosAdd />
                            Agregar pasajero
                        </button>
                    </div>
                    <div className="counter-selection">

                        <button type="button"
                            className="warning-button"
                            onClick={handleClickRemove}
                        >
                            <IoIosRemoveCircle />
                            Quitar
                        </button>
                    </div>
                </div>
            </div>
            {airRouteSelected.fligthScales && airRouteSelected.fligthScales.length > 0 &&
             airRouteSelected.fligthScales.map(item=>(<FlightScale key={`flightScale${item.fligthScalesId}`} {...item} />))
            } 

        </div>
    )
};
const mapSatateToProps = (state) => {
    return {
        airRouteSelected: state.airRouteSelected
    };
}

const mapDispatchToProps = {
    setBuyRoute
}

export default connect(mapSatateToProps, mapDispatchToProps)(FormBuy);