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
            this.player1.squaresDeclared.push(square);
            square.element.classList.add('playerone');
        }
        else if (this.player2.isCurrentPlayer()) {
            square.element.classList.add('playertwo');
            this.player2.squaresDeclared.push(square);
        }
        if (!this.declareWinner()) {
            this.nextPlayer();
        }
    }
    nextPlayer() {
        var _a, _b, _c, _d;
        if (this.player1.isCurrentPlayer()) {
            const text = "Player " + this.player2.playerId + 's turn';
            this.player1.isTurn = false;
            this.player2.isTurn = true;
            this.player2.displayCurrentPlayer();
            (_a = document.getElementById("playerTurn")) === null || _a === void 0 ? void 0 : _a.classList.remove("player1Header");
            (_b = document.getElementById("playerTurn")) === null || _b === void 0 ? void 0 : _b.classList.add("player2Header");
        }
        else {
            const text = "Player " + this.player1.playerId + 's turn';
            this.player2.isTurn = false;
            this.player1.isTurn = true;
            this.player1.displayCurrentPlayer();
            (_c = document.getElementById("playerTurn")) === null || _c === void 0 ? void 0 : _c.classList.remove("player2Header");
            (_d = document.getElementById("playerTurn")) === null || _d === void 0 ? void 0 : _d.classList.add("player1Header");
        }
    }
    displayWinner(message) {
        var _a, _b;
        (_a = document.getElementById('playerTurn')) === null || _a === void 0 ? void 0 : _a.remove();
        const element = document.createElement('div');
        element.setAttribute('id', 'playerTurn');
        element.classList.add('winner');
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
        else {
            const p1Array = this.create2dArray(this.player1);
            const p2Array = this.create2dArray(this.player2);
            if (this.fiveConseq(this.player1, p1Array)) {
                this.displayWinner("Player 1 WINS!");
                return true;
            }
            else if (this.fiveConseq(this.player2, p2Array)) {
                this.displayWinner("Player 2 WINS!");
                return true;
            }
            else if (this.fiveDown(this.player2, p2Array)) {
                this.displayWinner("Player 2 WINS!");
                return true;
            }
            else if (this.fiveDown(this.player1, p1Array)) {
                this.displayWinner("Player 1 WINS!");
                return true;
            }
            else if (this.diagLeft(this.player2, p2Array)) {
                this.displayWinner("Player 2 WINS!");
                return true;
            }
            else if (this.diagLeft(this.player1, p1Array)) {
                this.displayWinner("Player 1 WINS!");
                return true;
            }
            else if (this.diagRight(this.player2, p2Array)) {
                this.displayWinner("Player 2 WINS!");
                return true;
            }
            else if (this.diagRight(this.player1, p1Array)) {
                this.displayWinner("Player 1 WINS!");
                return true;
            }
        }
        return false;
    }
    static exists(arr, search) {
        return arr.some(row => JSON.stringify(row) === JSON.stringify(search));
    }
    create2dArray(player) {
        const array = player.squaresDeclared;
        let squareIds = [];
        array.forEach((square) => {
            squareIds.push([square.id, square.rowId]);
        });
        return squareIds;
    }
    fiveConseq(player, squareIds) {
        for (let idx = 0; idx < squareIds.length; idx++) {
            if (app.exists(squareIds, [squareIds[idx][0], squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + 1, squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + 2, squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + 3, squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + 4, squareIds[idx][1]])) {
                return true;
            }
        }
        return false;
    }
    fiveDown(player, squareIds) {
        const number = this.grid.rows.length;
        for (let idx = 0; idx < squareIds.length; idx++) {
            if (app.exists(squareIds, [squareIds[idx][0], squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + number, squareIds[idx][1] + 1]) && app.exists(squareIds, [squareIds[idx][0] + (number * 2), squareIds[idx][1] + 2]) && app.exists(squareIds, [squareIds[idx][0] + (number * 3), squareIds[idx][1] + 3]) && app.exists(squareIds, [squareIds[idx][0] + (number * 4), squareIds[idx][1] + 4])) {
                return true;
            }
        }
        return false;
    }
    diagLeft(player, squareIds) {
        const number = this.grid.rows.length - 1;
        for (let idx = 0; idx < squareIds.length; idx++) {
            if (app.exists(squareIds, [squareIds[idx][0], squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + number, squareIds[idx][1] + 1]) && app.exists(squareIds, [squareIds[idx][0] + (number * 2), squareIds[idx][1] + 2]) && app.exists(squareIds, [squareIds[idx][0] + (number * 3), squareIds[idx][1] + 3]) && app.exists(squareIds, [squareIds[idx][0] + (number * 4), squareIds[idx][1] + 4])) {
                return true;
            }
        }
        return false;
    }
    diagRight(player, squareIds) {
        const number = this.grid.rows.length + 1;
        for (let idx = 0; idx < squareIds.length; idx++) {
            if (app.exists(squareIds, [squareIds[idx][0], squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + number, squareIds[idx][1] + 1]) && app.exists(squareIds, [squareIds[idx][0] + (number * 2), squareIds[idx][1] + 2]) && app.exists(squareIds, [squareIds[idx][0] + (number * 3), squareIds[idx][1] + 3]) && app.exists(squareIds, [squareIds[idx][0] + (number * 4), squareIds[idx][1] + 4])) {
                return true;
            }
        }
        return false;
    }
}
exports.default = app;
const grid = new grid_1.default(15, 15);
exports.playerone = new Player_1.default(1, true);
exports.playertwo = new Player_1.default(2);
const newGame = new app(grid, exports.playerone, exports.playertwo);
(_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.appendChild(grid.element);
