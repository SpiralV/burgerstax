import { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        return (
            <div>
            <ul> {ingredientComponents} </ul>
            <BurgerStack clickedIngredients={this.props.clickedIngredients} />
            <ClearBurger clearBurger={this.props.clearBurger} />
            </div>
        )
    }
}