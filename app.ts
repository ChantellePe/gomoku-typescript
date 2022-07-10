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
        this.grid.element.appendChild(reset);
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
        this.grid.selectedSquares = []
        document.getElementById('playerTurn')?.remove()
        const textNode = document.createTextNode("Player 1's turn");
        const element = document.createElement('div')
        element.setAttribute('id', 'playerTurn');
        element.appendChild(textNode)
        document.getElementById('main')?.appendChild(element)
        this.player1.isTurn = true
        this.player2.isTurn = false
        this.grid.rows.forEach(row => {
            row.squares.forEach(square => {
                square.element.classList.remove('occupied', 'playerone', 'playertwo');
                square.element.classList.add('available');

            })

        })

    }

    playerTurn(square: Square) {
        if (this.player1.isCurrentPlayer()) {
            this.player1.squaresDeclared.push(square.id)
            square.element.classList.add('playerone');
            this.nextPlayer();

        } else {
            square.element.classList.add('playertwo');
            this.player2.squaresDeclared.push(square.id)
            this.nextPlayer();
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
        } else {
            const text = "Player " + this.player1.playerId + 's turn';
            this.player2.isTurn = false;
            this.player1.isTurn = true;
            this.player1.displayCurrentPlayer();

        }

        console.log(Player)

    }
}








const grid1 = new Grid(5, 5)
export const playerone = new Player(1, true);
export const playertwo = new Player(2);
const newGame = new app(grid1, playerone, playertwo)

document.getElementById("main")?.appendChild(grid1.element)