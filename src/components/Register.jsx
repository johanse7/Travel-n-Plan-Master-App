import React, { Component } from 'react';
import '../assets/styles/components/Register.scss';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            lastName: '',
            phone: '',
            mail: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    handleClick(ev) {
        console.log(this.state);
    }

    render() {
        return (
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form className="register__container--form">
                        <input className="input"  value={this.state.name} placeholder="Nombre" name='name' 
                               className="input"       onChange={this.handleChange} />
                        <input className="input" value={this.state.lastName} placeholder="Apellidos" name='lastName'
                               className="input"      onChange={this.handleChange} />
                        <input className="input" value={this.state.phone} placeholder="Celular" name='phone' type="tel"
                               className="input"      onChange={this.handleChange} />
                        <input className="input" value={this.state.mail} placeholder="Mail" name='mail'
                               className="input"      onChange={this.handleChange} type="mail" />
                        <input className="input" value={this.state.password} placeholder="Password" name='password'
                                       onChange={this.handleChange} type="password" />
                        <button className="main-button" type='button' onClick={this.handleClick}>
                            Registrarme
                        </button>
                    </form>

                </section>
            </section>
        );
    }
}

export default Register;