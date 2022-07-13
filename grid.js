"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Row_1 = __importDefault(require("./Row"));
class Grid {
    constructor(rowNumber, squareNumberPerRow) {
        var _a;
        this.rows = Array.from({ length: rowNumber }).map((_, index) => {
            return new Row_1.default(index, squareNumberPerRow);
        });
        this.element = document.createElement('div');
        this.element.classList.add('grid');
        this.element.append(...this.rows.map((row) => row.element));
        const element = document.createElement('div');
        element.setAttribute('id', 'playerTurn');
        const textNode = document.createTextNode("It's Player 1's turn");
        element.classList.add("player1Header");
        element.appendChild(textNode);
        (_a = document.getElementById('header')) === null || _a === void 0 ? void 0 : _a.appendChild(element);
    }
}
exports.default = Grid;
