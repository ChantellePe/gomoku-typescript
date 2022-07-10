"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("./Player"));
const grid_1 = __importDefault(require("./grid"));
class app {
    constructor(grid, player1, player2) {
        this.grid = grid;
        this.player1 = player1;
        this.player2 = player2;
        const reset = document.createElement('button');
        reset.setAttribute('id', 'newGame');
        reset.classList.add('reset');
        reset.innerHTML = "Reset";
        this.grid.element.appendChild(reset);
        reset.addEventListener('click', () => {
            this.clearGrid();
        });
        this.grid.rows.forEach(row => {
            row.squares.forEach(square => {
                square.element.addEventListener('click', () => {
                    this.playerTurn(square);
                });
            });
        });
    }
    clearGrid() {
        var _a, _b;
        this.grid.selectedSquares = [];
        (_a = document.getElementById('playerTurn')) === null || _a === void 0 ? void 0 : _a.remove();
        const textNode = document.createTextNode("Player 1's turn");
        const element = document.createElement('div');
        element.setAttribute('id', 'playerTurn');
        element.appendChild(textNode);
        (_b = document.getElementById('main')) === null || _b === void 0 ? void 0 : _b.appendChild(element);
        this.player1.isTurn = true;
        this.player2.isTurn = false;
        this.grid.rows.forEach(row => {
            row.squares.forEach(square => {
                square.element.classList.remove('occupied', 'playerone', 'playertwo');
                square.element.classList.add('available');
            });
        });
    }
    playerTurn(square) {
        if (this.player1.isCurrentPlayer()) {
            this.player1.squaresDeclared.push(square.id);
            square.element.classList.add('playerone');
            this.nextPlayer();
        }
        else {
            square.element.classList.add('playertwo');
            this.player2.squaresDeclared.push(square.id);
            this.nextPlayer();
        }
    }
    nextPlayer() {
        console.log(this.player1.squaresDeclared);
        console.log(this.player2.squaresDeclared);
        if (this.player1.isCurrentPlayer()) {
            const text = "Player " + this.player2.playerId + 's turn';
            this.player1.isTurn = false;
            this.player2.isTurn = true;
            this.player2.displayCurrentPlayer();
        }
        else {
            const text = "Player " + this.player1.playerId + 's turn';
            this.player2.isTurn = false;
            this.player1.isTurn = true;
            this.player1.displayCurrentPlayer();
        }
        console.log(Player_1.default);
    }
}
exports.default = app;
const grid1 = new grid_1.default(5, 5);
exports.playerone = new Player_1.default(1, true);
exports.playertwo = new Player_1.default(2);
const newGame = new app(grid1, exports.playerone, exports.playertwo);
(_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.appendChild(grid1.element);
