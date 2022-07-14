"use strict";
exports.__esModule = true;
var STATUS;
(function (STATUS) {
    STATUS["AVAILABLE"] = "AVAILABLE";
    STATUS["OCCUPIED"] = "OCCUPIED";
    STATUS["SELECTED"] = "SELECTED";
})(STATUS || (STATUS = {}));
var Square = /** @class */ (function () {
    function Square(id, rowId, isOccupied) {
        var _this = this;
        if (isOccupied === void 0) { isOccupied = false; }
        this.id = id;
        this.rowId = rowId;
        this.status = STATUS.AVAILABLE;
        this.element = document.createElement('div');
        this.element.classList.add('square');
        this.element.classList.add('available');
        this.element.addEventListener('click', function () {
            _this.handleClick();
        });
    }
    Square.prototype.handleClick = function () {
        this.element.classList.remove('available');
        this.element.classList.add('occupied');
    };
    return Square;
}());
exports["default"] = Square;
