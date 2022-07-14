import Row from './Row'


export default class Grid {
    rows: Row[]
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

        const element = document.createElement('div')
        element.setAttribute('id', 'playerTurn')
        const textNode = document.createTextNode("It's Player 1's turn")
        element.classList.add("player1Header")
        element.appendChild(textNode)
        document.getElementById('header')?.appendChild(element)
    }
}
