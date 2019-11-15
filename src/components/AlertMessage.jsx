import React, { useState } from 'react';
import '../assets/styles/components/AlertMessage.scss';

const AlertMessage = (props) => {
    const { message, classTypeAlert } = props;
    const [alertState, setAlertState] = useState({
        showAlert: true
    });

    const handleClick = () => {
        setAlertState({
            showAlert : false
        });
    };

    return (
        <>
            {alertState.showAlert &&
                <div className={`alert ${classTypeAlert}`} >
                    <span className="closebtn" onClick={handleClick}>&times;</span>
                    <strong>{message}</strong>
                </div >
            }
        </>
    );
};

export default AlertMessage;