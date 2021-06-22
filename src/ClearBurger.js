import { Component } from 'react'


export default class ClearBurger extends Component {
    return() {
        return (
            <button onClick={(e) => this.props.ClearBurger(e)}>
                Clear Burger Stack
            </button>
        )
    }
}