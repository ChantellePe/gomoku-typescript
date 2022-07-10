"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const row_1 = __importDefault(require("./row"));
class Grid {
    constructor(rowNumber, squareNumberPerRow) {
        this.selectedSquares = [];
        this.rows = Array.from({ length: rowNumber }).map((_, index) => {
            return new row_1.default(index, squareNumberPerRow);
        });
        this.element = document.createElement('div');
        this.element.classList.add('grid');
        this.element.append(...this.rows.map((row) => row.element));
    }
}
exports.default = Grid;
