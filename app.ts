import Player from './Player'
import Grid from './grid'
import Square from './Square'



export default class app {
    grid: Grid
    player1: Player
    player2: Player


    constructor(grid: Grid, player1: Player, player2: Player) {
        this.grid = grid
        this.player1 = player1
        this.player2 = player2


        const reset = document.createElement('button');
        reset.setAttribute('id', 'newGame');
        reset.classList.add('reset');
        reset.innerHTML = "Reset"
        this.grid.element?.appendChild(reset);
        reset.addEventListener('click', () => {
            this.clearGrid();

        })
        this.grid.rows.forEach(row => {
            row.squares.forEach(square => {
                square.element.addEventListener('click', () => {
                    this.playerTurn(square);

                })
            })
        })

    }


    clearGrid() {
        this.grid.element.classList.remove('gameOver')
        this.player1.squaresDeclared = [];
        this.player2.squaresDeclared = [];
        document.getElementById('playerTurn')?.remove()
        const textNode = document.createTextNode("Welcome to Gomoku! It's Player 1's turn");
        const element = document.createElement('div')
        element.setAttribute('id', 'playerTurn');
        element.appendChild(textNode)
        document.getElementById('header')?.appendChild(element)
        this.player1.isTurn = true
        this.player2.isTurn = false
        this.grid.rows.forEach(row => {
            row.squares.forEach(square => {
                square.element.classList.remove('occupied', 'playerone', 'playertwo');
                square.element.classList.add('available');

            })

        })

    }

    playerTurn(square: Square): void {
        if (this.player1.isCurrentPlayer()) {
            this.player1.squaresDeclared.push(square)
            square.element.classList.add('playerone')

        } else if (this.player2.isCurrentPlayer()) {
            square.element.classList.add('playertwo');
            this.player2.squaresDeclared.push(square)

        }
        if (!this.declareWinner()) {
            this.nextPlayer();
        }
    }


    nextPlayer(): void {
        if (this.player1.isCurrentPlayer()) {
            const text = "Player " + this.player2.playerId + 's turn';
            this.player1.isTurn = false;
            this.player2.isTurn = true;
            this.player2.displayCurrentPlayer();
        } else {
            const text = "Player " + this.player1.playerId + 's turn';
            this.player2.isTurn = false;
            this.player1.isTurn = true;
            this.player1.displayCurrentPlayer();

        }
    }

    displayWinner(message: string): void {
        document.getElementById('playerTurn')?.remove()
        const element = document.createElement('div')
        element.setAttribute('id', 'playerTurn')
        const textNode = document.createTextNode(message);
        element.appendChild(textNode);
        document.getElementById("header")?.appendChild(element)
        this.grid.element.classList.add('gameOver')
    }

    declareWinner() {
        if (this.player1.squaresDeclared.length + this.player2.squaresDeclared.length === this.grid.rows.length ** 2) {
            this.displayWinner("Its a TIE!");
            return true;
        } else if (this.fiveConseq(this.player1)) {
            this.displayWinner("Player 1 WINS!");
            return true;
        } else if (this.fiveConseq(this.player2)) {
            this.displayWinner("Player 2 WINS!");
            return true;
        } else if (this.fiveDown(this.player2)) {
            this.displayWinner("Player 2 WINS!");
            return true;
        } else if (this.fiveDown(this.player1)) {
            this.displayWinner("Player 1 WINS!");
            return true;
        } else if (this.diagLeft(this.player2)) {
            this.displayWinner("Player 2 WINS!");
            return true;
        } else if (this.diagLeft(this.player1)) {
            this.displayWinner("Player 1 WINS!");
            return true;
        } else if (this.diagRight(this.player2)) {
            this.displayWinner("Player 2 WINS!");
            return true;
        } else if (this.diagRight(this.player1)) {
            this.displayWinner("Player 1 WINS!");
            return true;
        }

    }

    static exists(arr: number[][], search: number[]) {
        return arr.some(row => JSON.stringify(row) === JSON.stringify(search));
    }


    fiveConseq(player: Player) {
        const array = player.squaresDeclared;
        let squareIds: number[][] = []
        array.forEach((square) => {
            squareIds.push([square.id, square.rowId])
        })
        for (let idx = 0; idx < array.length; idx++) {
            if (app.exists(squareIds, [squareIds[idx][0], squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + 1, squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + 2, squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + 3, squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + 4, squareIds[idx][1]])) {
                return true
            }
        }
    }

    fiveDown(player: Player) {
        const number = this.grid.rows.length
        const array = player.squaresDeclared;
        let squareIds: number[][] = []
        array.forEach((square) => {
            squareIds.push([square.id, square.rowId])
        })
        for (let idx = 0; idx < array.length; idx++) {
            if (app.exists(squareIds, [squareIds[idx][0], squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + number, squareIds[idx][1] + 1]) && app.exists(squareIds, [squareIds[idx][0] + (number * 2), squareIds[idx][1] + 2]) && app.exists(squareIds, [squareIds[idx][0] + (number * 3), squareIds[idx][1] + 3]) && app.exists(squareIds, [squareIds[idx][0] + (number * 4), squareIds[idx][1] + 4])) {
                return true
            }
        }
    }

    diagLeft(player: Player) {
        const number = this.grid.rows.length - 1
        const array = player.squaresDeclared;
        let squareIds: number[][] = []
        array.forEach((square) => {
            squareIds.push([square.id, square.rowId])
        })
        for (let idx = 0; idx < array.length; idx++) {
            if (app.exists(squareIds, [squareIds[idx][0], squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + number, squareIds[idx][1] + 1]) && app.exists(squareIds, [squareIds[idx][0] + (number * 2), squareIds[idx][1] + 2]) && app.exists(squareIds, [squareIds[idx][0] + (number * 3), squareIds[idx][1] + 3]) && app.exists(squareIds, [squareIds[idx][0] + (number * 4), squareIds[idx][1] + 4])) {
                return true
            }
        }
    }

    diagRight(player: Player) {
        const number = this.grid.rows.length + 1
        const array = player.squaresDeclared;
        let squareIds: number[][] = []
        array.forEach((square) => {
            squareIds.push([square.id, square.rowId])
        })
        for (let idx = 0; idx < array.length; idx++) {
            if (app.exists(squareIds, [squareIds[idx][0], squareIds[idx][1]]) && app.exists(squareIds, [squareIds[idx][0] + number, squareIds[idx][1] + 1]) && app.exists(squareIds, [squareIds[idx][0] + (number * 2), squareIds[idx][1] + 2]) && app.exists(squareIds, [squareIds[idx][0] + (number * 3), squareIds[idx][1] + 3]) && app.exists(squareIds, [squareIds[idx][0] + (number * 4), squareIds[idx][1] + 4])) {
                return true
            }
        }
    }
}



const grid1 = new Grid(15, 15)
export const playerone = new Player(1, true);
export const playertwo = new Player(2);
const newGame = new app(grid1, playerone, playertwo)
document.getElementById("main")?.appendChild(grid1.element)