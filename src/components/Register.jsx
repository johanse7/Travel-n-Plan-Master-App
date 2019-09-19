import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            nombre:'',
            apellido:''
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
            <form>
                <label>
                    Nombre:
                  <input value={this.state.nombre} name='nombre' onChange={this.handleChange} />
                </label>
                <label>
                    Apellido:
                  <input value={this.state.apellido} name='apellido' onChange={this.handleChange} />
                </label>
                <button type='button' onClick={this.handleClick}>
                    Resgitrarme
                </button>
            </form>
        );
    }
}

export default Register;