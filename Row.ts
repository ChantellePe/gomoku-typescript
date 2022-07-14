import Square from './Square'

export default class Row {
    id: number
    squares: Square[]
    element: HTMLDivElement

    constructor(id: number, squareNumber: number, occupiedSquares: number[] = []) {
        this.id = id
        this.squares = Array.from({ length: squareNumber }).map((_, index) => {
            const squareID: number = squareNumber * id + index
            return new Square(squareID, this.id, false)
        })
        this.element = document.createElement('div')
        this.element.classList.add('row')
        this.element.append(...this.squares.map((square) => square.element))
    }
}
