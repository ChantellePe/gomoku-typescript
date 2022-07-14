"use strict";
exports.__esModule = true;
var Square_1 = require("./Square");
var Row = /** @class */ (function () {
    function Row(id, squareNumber, occupiedSquares) {
        var _a;
        var _this = this;
        if (occupiedSquares === void 0) { occupiedSquares = []; }
        this.id = id;
        this.squares = Array.from({ length: squareNumber }).map(function (_, index) {
            var squareID = squareNumber * id + index;
            return new Square_1["default"](squareID, _this.id, false);
        });
        this.element = document.createElement('div');
        this.element.classList.add('row');
        (_a = this.element).append.apply(_a, this.squares.map(function (square) { return square.element; }));
    }
    return Row;
}());
exports["default"] = Row;
