enum STATUS {
    AVAILABLE = 'AVAILABLE',
    OCCUPIED = 'OCCUPIED',
    SELECTED = 'SELECTED',
}

export default class Square {
    id: number
    status: STATUS
    element: HTMLDivElement
    rowId: number

    constructor(id: number, rowId: number, isOccupied: boolean = false) {
        this.id = id
        this.rowId = rowId
        this.status = STATUS.AVAILABLE
        this.element = document.createElement('div')
        this.element.classList.add('square')
        this.element.classList.add('available')
        this.element.addEventListener('click', () => {
            this.handleClick()
        })
    }

    handleClick() {
        this.element.classList.remove('available')
        this.element.classList.add('occupied')
    }
}