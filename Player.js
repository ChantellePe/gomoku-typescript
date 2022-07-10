"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(playerId, isTurn = false) {
        this.playerId = playerId;
        this.isTurn = isTurn;
    }
    isCurrentPlayer() {
        if (this.isTurn === true) {
            return true;
        }
        return false;
    }
    nextPlayer(Player) {
        if (this.isCurrentPlayer()) {
            const text = "Player " + this.playerId + 's turn';
            this.isTurn = false;
            Player.isTurn = true;
            Player.displayCurrentPlayer();
        }
        console.log(Player);
    }
    displayCurrentPlayer() {
        var _a, _b;
        (_a = document.getElementById('playerTurn')) === null || _a === void 0 ? void 0 : _a.remove();
        const element = document.createElement('div');
        element.setAttribute('id', 'playerTurn');
        const textNode = document.createTextNode("Player " + this.playerId + "\'s turn");
        element.appendChild(textNode);
        (_b = document.getElementById("main")) === null || _b === void 0 ? void 0 : _b.appendChild(element);
    }
}
exports.default = Player;
exports.playerone = new Player(1, true);
exports.playertwo = new Player(2);
