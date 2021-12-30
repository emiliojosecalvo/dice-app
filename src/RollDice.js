import React, { Component } from 'react';
import Dice from './Dice'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        faces: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = { res1: 'one', res2: 'one', rolling: false };
        this.rollDice = this.rollDice.bind(this);
    }
    rollDice(e) {
        //get a random number from 1 to 6
        let randNum1 = Math.floor(Math.random() * this.props.faces.length);
        let randNum2 = Math.floor(Math.random() * this.props.faces.length);
        //sets the random numbers to each dice
        this.setState({ res1: this.props.faces[randNum1], res2: this.props.faces[randNum2], rolling: true });
        //wait one second while the dice rolls and go back to false
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1500);
    }
    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container' >
                    <Dice res={this.state.res1} rolling={this.state.rolling} />
                    <Dice res={this.state.res2} rolling={this.state.rolling} />
                </div>
                <button className='RollDice-button' onClick={this.rollDice} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
        )
    }
}

export default RollDice;