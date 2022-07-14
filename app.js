"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("./Game"));
const Player_1 = __importDefault(require("./Player"));
const Grid_1 = __importDefault(require("./Grid"));
class app {
    constructor() {
        var _a, _b, _c, _d;
        const element = document.createElement('div');
        element.setAttribute('id', 'welcomeMessage');
        const textNode = document.createTextNode("Choose a grid size:");
        element.appendChild(textNode);
        (_a = document.getElementById('header')) === null || _a === void 0 ? void 0 : _a.appendChild(element);
        const tenByTen = document.createElement('button');
        tenByTen.setAttribute('id', '10By10');
        tenByTen.classList.add('button');
        tenByTen.innerHTML = "10 X 10";
        (_b = document.getElementById("main")) === null || _b === void 0 ? void 0 : _b.appendChild(tenByTen);
        tenByTen.addEventListener('click', () => {
            this.createNewGrid(10);
        });
        const fifteenByFifteen = document.createElement('button');
        fifteenByFifteen.setAttribute('id', '15By15');
        fifteenByFifteen.classList.add('button');
        fifteenByFifteen.innerHTML = "15 X 15";
        (_c = document.getElementById("main")) === null || _c === void 0 ? void 0 : _c.appendChild(fifteenByFifteen);
        fifteenByFifteen.addEventListener('click', () => {
            this.createNewGrid(15);
        });
        const nineteenByNineteen = document.createElement('button');
        nineteenByNineteen.setAttribute('id', '19By19');
        nineteenByNineteen.classList.add('button');
        nineteenByNineteen.innerHTML = "19 X 19";
        (_d = document.getElementById("main")) === null || _d === void 0 ? void 0 : _d.appendChild(nineteenByNineteen);
        nineteenByNineteen.addEventListener('click', () => {
            this.createNewGrid(19);
        });
    }
    createNewGrid(size) {
        var _a;
        this.hideButtonsAndBanner();
        const grid = new Grid_1.default(size, size);
        const playerone = new Player_1.default(1, true);
        const playertwo = new Player_1.default(2);
        const newGame = new Game_1.default(grid, playerone, playertwo);
        (_a = document.getElementById("main")) === null || _a === void 0 ? void 0 : _a.appendChild(grid.element);
    }
    hideButtonsAndBanner() {
        var _a, _b, _c, _d;
        const nineteenByNineteen = document.getElementById('19By19');
        const fifteenByFifteen = document.getElementById('15By15');
        const tenByTen = document.getElementById('10By10');
        (_a = nineteenByNineteen === null || nineteenByNineteen === void 0 ? void 0 : nineteenByNineteen.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(nineteenByNineteen);
        (_b = fifteenByFifteen === null || fifteenByFifteen === void 0 ? void 0 : fifteenByFifteen.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(fifteenByFifteen);
        (_c = tenByTen === null || tenByTen === void 0 ? void 0 : tenByTen.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(tenByTen);
        const welcomeMessage = document.getElementById('welcomeMessage');
        (_d = welcomeMessage === null || welcomeMessage === void 0 ? void 0 : welcomeMessage.parentNode) === null || _d === void 0 ? void 0 : _d.removeChild(welcomeMessage);
    }
}
const gomoku = new app();
