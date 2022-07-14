"use strict";
exports.__esModule = true;
var Row_1 = require("./Row");
var Grid = /** @class */ (function () {
    function Grid(rowNumber, squareNumberPerRow) {
        var _a;
        var _b;
        this.rows = Array.from({ length: rowNumber }).map(function (_, index) {
            return new Row_1["default"](index, squareNumberPerRow);
        });
        this.element = document.createElement('div');
        this.element.classList.add('grid');
        (_a = this.element).append.apply(_a, this.rows.map(function (row) { return row.element; }));
        var element = document.createElement('div');
        element.setAttribute('id', 'playerTurn');
        var textNode = document.createTextNode("It's Player 1's turn");
        element.classList.add("player1Header");
        element.appendChild(textNode);
        (_b = document.getElementById('header')) === null || _b === void 0 ? void 0 : _b.appendChild(element);
    }
    return Grid;
}());
exports["default"] = Grid;
