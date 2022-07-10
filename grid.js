"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const row_1 = __importDefault(require("./row"));
const Player_1 = require("./Player");
class Grid {
    constructor(rowNumber, squareNumberPerRow) {
        this.selectedSeats = [];
        this.rows = Array.from({ length: rowNumber }).map((_, index) => {
            return new row_1.default(index, squareNumberPerRow);
        });
        this.element = document.createElement('div');
        this.element.classList.add('grid');
        this.element.append(...this.rows.map((row) => row.element));
    }
}
exports.default = Grid;
const grid1 = new Grid(10, 10);
(_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.appendChild(grid1.element);
Player_1.playerone.displayCurrentPlayer();
