import Grid from './grid'
import Square from './Square'

export default class Player {
    playerId: number
    isTurn: Boolean
    squaresDeclared: Square[];



    constructor(playerId: number, isTurn: boolean = false) {
        this.playerId = playerId
        this.isTurn = isTurn
        this.squaresDeclared = []

    }


    isCurrentPlayer(): boolean {
        if (this.isTurn === true) {
            return true;
        }
        return false;


    }
    displayCurrentPlayer(): void {
        document.getElementById('playerTurn')?.remove()
        const element = document.createElement('div')
        element.setAttribute('id', 'playerTurn')
        const textNode = document.createTextNode("Now it's Player " + this.playerId + "\'s turn");
        element.appendChild(textNode);
        document.getElementById("header")?.appendChild(element)

    }



}

