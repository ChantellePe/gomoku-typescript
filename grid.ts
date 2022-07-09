import Row from './row'

export default class Grid {
    rows: Row[]
    selectedSeats: number[] = []
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
    }


}

const grid1 = new Grid(5, 5)

document.getElementById("main")?.appendChild(grid1.element)                   