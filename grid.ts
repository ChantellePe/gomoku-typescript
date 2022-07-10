import Player from './Player'
import Row from './row'





export default class Grid {
    rows: Row[]
    selectedSquares: number[] = []
    element: HTMLDivElement


    constructor(
        rowNumber: number,
        squareNumberPerRow: number
    ) {
        this.rows = Array.from({ length: rowNumber }).map((_, index) => {
            return new Row(index, squareNumberPerRow)
        })
        this.element = document.createElement('div')
        this.element.classList.add('grid')
        this.element.append(...this.rows.map((row) => row.element))

        const textNode = document.createTextNode("Welcome to Gomoku! It's Player 1's turn");
        const element = document.createElement('div')
        element.setAttribute('id', 'playerTurn');
        element.appendChild(textNode)
        document.getElementById('main')?.appendChild(element)

    }

}



