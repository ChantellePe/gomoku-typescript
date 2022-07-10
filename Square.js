"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.element.classList.add('occupied');
    }
    get isSelected() {
        return this.status === STATUS.SELECTED;
    }
}
exports.default = Square;
