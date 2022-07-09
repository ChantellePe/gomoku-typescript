var _a;
import Row from './row';
export default class Grid {
    constructor(rowNumber, squareNumberPerRow) {
        this.selectedSeats = [];
        this.rows = Array.from({ length: rowNumber }).map((_, index) => {
            return new Row(index, squareNumberPerRow);
        });
        this.element = document.createElement('div');
        this.element.classList.add('grid');
        this.element.append(...this.rows.map((row) => row.element));
    }
}
const grid1 = new Grid(5, 5);
(_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.appendChild(grid1.element);
