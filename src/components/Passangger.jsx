import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IoIosAdd, IoIosRemoveCircle } from 'react-icons/io';
import { setBuyAddPassangger } from '../actions/index';
import '../assets/styles/components/Passangger.scss';

const MIN_PASSENGER = 1;

const Passangger = props => {

    const [form, setValues] = useState({
        totalPassenger: MIN_PASSENGER,
    });
    useEffect(() => {
        props.setBuyAddPassangger(form);
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
    };
    return (
        <>
            <div className="container-selection">
                <span>Pasajeros</span>
                <div className="counter">{form.totalPassenger}</div>
            </div>
            <h3>Diligencia tu compra</h3>
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
        </>
    );
};

const mapDispatchToProps = {
    setBuyAddPassangger
}

export default connect(null, mapDispatchToProps)(Passangger); 
