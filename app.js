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
        var _a;
        this.grid = grid;
        this.player1 = player1;
        this.player2 = player2;
        const reset = document.createElement('button');
        reset.setAttribute('id', 'newGame');
        reset.classList.add('reset');
        reset.innerHTML = "Reset";
        (_a = this.grid.element) === null || _a === void 0 ? void 0 : _a.appendChild(reset);
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
        this.grid.element.classList.remove('gameOver');
        this.player1.squaresDeclared = [];
        this.player2.squaresDeclared = [];
        (_a = document.getElementById('playerTurn')) === null || _a === void 0 ? void 0 : _a.remove();
        const textNode = document.createTextNode("Welcome to Gomoku! It's Player 1's turn");
        const element = document.createElement('div');
        element.setAttribute('id', 'playerTurn');
        element.appendChild(textNode);
        (_b = document.getElementById('header')) === null || _b === void 0 ? void 0 : _b.appendChild(element);
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
            if (!this.declareWinner()) {
                this.nextPlayer();
            }
        }
        else {
            square.element.classList.add('playertwo');
            this.player2.squaresDeclared.push(square.id);
            if (!this.declareWinner()) {
                this.nextPlayer();
            }
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
    }
    displayWinner(message) {
        var _a, _b;
        (_a = document.getElementById('playerTurn')) === null || _a === void 0 ? void 0 : _a.remove();
        const element = document.createElement('div');
        element.setAttribute('id', 'playerTurn');
        const textNode = document.createTextNode(message);
        element.appendChild(textNode);
        (_b = document.getElementById("header")) === null || _b === void 0 ? void 0 : _b.appendChild(element);
        this.grid.element.classList.add('gameOver');
    }
    declareWinner() {
        if (this.player1.squaresDeclared.length + this.player2.squaresDeclared.length === Math.pow(this.grid.rows.length, 2)) {
            this.displayWinner("Its a TIE!");
            return true;
        }
        else if (this.fiveConseq(this.player1)) {
            this.displayWinner("Player 1 WINS!");
            return true;
        }
        else if (this.fiveConseq(this.player2)) {
            this.displayWinner("Player 2 WINS!");
            return true;
        }
        else if (this.fiveDown(this.player2)) {
            this.displayWinner("Player 2 WINS!");
            return true;
        }
        else if (this.fiveDown(this.player1)) {
            this.displayWinner("Player 1 WINS!");
            return true;
        }
        else if (this.diagLeft(this.player2)) {
            this.displayWinner("Player 2 WINS!");
            return true;
        }
        else if (this.diagLeft(this.player1)) {
            this.displayWinner("Player 1 WINS!");
            return true;
        }
        else if (this.diagRight(this.player2)) {
            this.displayWinner("Player 2 WINS!");
            return true;
        }
        else if (this.diagRight(this.player1)) {
            this.displayWinner("Player 1 WINS!");
            return true;
        }
        return false;
    }
    fiveConseq(player) {
        const array = player.squaresDeclared.sort();
        for (let idx = 0; idx < array.length; idx++) {
            if (array.includes(array[idx] + 1) && array.includes(array[idx] + 2) && array.includes(array[idx] + 3) && array.includes(array[idx] + 4)) {
                let newArray = [array[idx], array[idx] + 1, array[idx] + 2, array[idx] + 3, array[idx] + 4];
                return true;
            }
        }
    }
    fiveDown(player) {
        const number = this.grid.rows.length;
        const array = player.squaresDeclared;
        for (let idx = 0; idx < array.length; idx++) {
            if (array.includes(array[idx] + number) && array.includes(array[idx] + (number * 2)) && array.includes(array[idx] + (number * 3)) && array.includes(array[idx] + (number * 4))) {
                console.log('Down 5');
                return true;
            }
        }
    }
    diagLeft(player) {
        const number = this.grid.rows.length - 1;
        const array = player.squaresDeclared;
        for (let idx = 0; idx < array.length; idx++) {
            if (array.includes(array[idx] + number) && array.includes(array[idx] + (number * 2)) && array.includes(array[idx] + (number * 3)) && array.includes(array[idx] + (number * 4))) {
                console.log('diagLeft 5');
                return true;
            }
        }
    }
    diagRight(player) {
        const number = this.grid.rows.length + 1;
        const array = player.squaresDeclared;
        for (let idx = 0; idx < array.length; idx++) {
            if (array.includes(array[idx] + number) && array.includes(array[idx] + (number * 2)) && array.includes(array[idx] + (number * 3)) && array.includes(array[idx] + (number * 4))) {
                console.log('diagRight 5');
                return true;
            }
        }
    }
}
exports.default = app;
const grid1 = new grid_1.default(15, 15);
exports.playerone = new Player_1.default(1, true);
exports.playertwo = new Player_1.default(2);
const newGame = new app(grid1, exports.playerone, exports.playertwo);
(_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.appendChild(grid1.element);
