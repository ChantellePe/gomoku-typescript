"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
var STATUS;
(function (STATUS) {
    STATUS["AVAILABLE"] = "AVAILABLE";
    STATUS["OCCUPIED"] = "OCCUPIED";
    STATUS["SELECTED"] = "SELECTED";
})(STATUS || (STATUS = {}));
class Square {
    constructor(id, isOccupied = false) {
        this.id = id;
        this.status = STATUS.AVAILABLE;
        this.element = document.createElement('div');
        this.element.classList.add('square');
        this.element.classList.add('available');
        this.element.addEventListener('click', () => {
            this.handleClick();
        });
    }
    handleClick() {
        this.element.classList.remove('available');
        if (Player_1.playerone.isCurrentPlayer()) {
            this.element.classList.add('playerone');
            Player_1.playerone.nextPlayer(Player_1.playertwo);
        }
        else {
            this.element.classList.add('playertwo');
            Player_1.playertwo.nextPlayer(Player_1.playerone);
        }
    }
    get isSelected() {
        return this.status === STATUS.SELECTED;
    }
}
exports.default = Square;
