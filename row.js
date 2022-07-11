"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Square_1 = __importDefault(require("./Square"));
class Row {
    constructor(id, squareNumber, occupiedSquares = []) {
        this.id = id;
        this.squares = Array.from({ length: squareNumber }).map((_, index) => {
            const squareID = squareNumber * id + index;
            return new Square_1.default(squareID, this.id, false);
        });
        this.element = document.createElement('div');
        this.element.classList.add('row');
        this.element.append(...this.squares.map((square) => square.element));
    }
}
exports.default = Row;
