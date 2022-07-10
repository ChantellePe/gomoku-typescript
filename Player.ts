
export default class Player {
    playerId: number
    isTurn: Boolean



    constructor(playerId: number, isTurn: boolean = false) {
        this.playerId = playerId
        this.isTurn = isTurn

    }


    isCurrentPlayer(): boolean {
        if (this.isTurn === true) {
            return true;
        }
        return false;


    }

    nextPlayer(Player: Player) {
        if (this.isCurrentPlayer()) {
            const text = "Player " + this.playerId + 's turn';
            this.isTurn = false;
            Player.isTurn = true;
            Player.displayCurrentPlayer();
        }

        console.log(Player)

    }

    displayCurrentPlayer(): void {
        document.getElementById('playerTurn')?.remove()
        const element = document.createElement('div')
        element.setAttribute('id', 'playerTurn')
        const textNode = document.createTextNode("Player " + this.playerId + "\'s turn");
        element.appendChild(textNode);
        document.getElementById("main")?.appendChild(element)
    }
}

export const playerone = new Player(1, true);
export const playertwo = new Player(2);