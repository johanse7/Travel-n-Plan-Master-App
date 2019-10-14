import React, { useState } from 'react';
import plusIcon from '../assets/static/plus.png';
import removeIcon from '../assets/static/remove.png';
import '../assets/styles/components/FormBuy.scss';

const MIN_PASSENGER = 1;

const FormBuy = () => {

    const [form, setValues] = useState({
        totalPassenger: MIN_PASSENGER,
    });
    const handleClickAdd = () => {
        debugger
        setValues({
            ...form,
            totalPassenger: form.totalPassenger + 1,
        });
    }
    const handleClickRemove = () => {

        if (form.totalPassenger > MIN_PASSENGER) {
            debugger
            setValues({
                ...form,
                totalPassenger: form.totalPassenger - 1,
            });
        }
    }
    return (
        <div className="container-formBuy">
            <div className="container-selection">
                <span>Cantidad de pasajeros seleccionados</span>
                <span className="counter">{form.totalPassenger}</span>
                <div className="counter-selection">
                    <div className="counter-selection-img">
                        <img
                            src={plusIcon}
                            alt="Agregar"
                            title="Agregar"
                            onClick={handleClickAdd}
                        />
                    </div>
                    <div className="counter-selection-img">
                        <img
                            src={removeIcon}
                            alt="Eliminar"
                            title="Eliminar"
                            onClick={handleClickRemove}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormBuy;