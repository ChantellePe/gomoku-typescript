
import Player from './Player'
import { playerone, playertwo } from './Player'

enum STATUS {
    AVAILABLE = 'AVAILABLE',
    OCCUPIED = 'OCCUPIED',
    SELECTED = 'SELECTED',
}



export default class Square {
    id: number
    status: STATUS
    element: HTMLDivElement




    constructor(id: number, isOccupied: boolean = false) {
        this.id = id
        this.status = STATUS.AVAILABLE
        this.element = document.createElement('div')
        this.element.classList.add('square')
        this.element.classList.add('available')
        this.element.addEventListener('click', () => {
            this.handleClick();

        })

    }


    handleClick() {
        this.element.classList.remove('available');
        if (playerone.isCurrentPlayer()) {
            this.element.classList.add('playerone');
            playerone.nextPlayer(playertwo);

        } else {
            this.element.classList.add('playertwo');
            playertwo.nextPlayer(playerone);
        }

    }

    get isSelected(): boolean {
        return this.status === STATUS.SELECTED
    }

}