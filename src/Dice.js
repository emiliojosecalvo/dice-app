import React, { Component } from 'react';
import './Dice.css'

class Dice extends Component {
    render() {
        return (
            <div>
                <i className={`Dice fas fa-dice-${this.props.res} ${this.props.rolling ? 'rolling' : ''}`}></i>
            </div>
        )
    }
}

export default Dice;