import Game from './Game'
import Player from './Player'
import Grid from './Grid'

class app {

    constructor() {


        const element = document.createElement('div')
        element.setAttribute('id', 'welcomeMessage')
        const textNode = document.createTextNode("Choose a grid size:")
        element.appendChild(textNode)
        document.getElementById('header')?.appendChild(element)

        const tenByTen = document.createElement('button')
        tenByTen.setAttribute('id', '10By10')
        tenByTen.classList.add('button')
        tenByTen.innerHTML = "10 X 10"
        document.getElementById("main")?.appendChild(tenByTen)
        tenByTen.addEventListener('click', () => {
            this.createNewGrid(10)
        })

        const fifteenByFifteen = document.createElement('button')
        fifteenByFifteen.setAttribute('id', '15By15')
        fifteenByFifteen.classList.add('button')
        fifteenByFifteen.innerHTML = "15 X 15"
        document.getElementById("main")?.appendChild(fifteenByFifteen)
        fifteenByFifteen.addEventListener('click', () => {
            this.createNewGrid(15)
        })

        const nineteenByNineteen = document.createElement('button')
        nineteenByNineteen.setAttribute('id', '19By19')
        nineteenByNineteen.classList.add('button')
        nineteenByNineteen.innerHTML = "19 X 19"
        document.getElementById("main")?.appendChild(nineteenByNineteen)
        nineteenByNineteen.addEventListener('click', () => {
            this.createNewGrid(19)
        })

    }

    createNewGrid(size: number): void {
        this.hideButtonsAndBanner()
        const grid = new Grid(size, size)
        const playerone = new Player(1, true)
        const playertwo = new Player(2)
        const newGame = new Game(grid, playerone, playertwo)
        document.getElementById("main")?.appendChild(grid.element)


    }

    hideButtonsAndBanner(): void {
        const nineteenByNineteen = document.getElementById('19By19')
        const fifteenByFifteen = document.getElementById('15By15')
        const tenByTen = document.getElementById('10By10')
        nineteenByNineteen?.parentNode?.removeChild(nineteenByNineteen)
        fifteenByFifteen?.parentNode?.removeChild(fifteenByFifteen)
        tenByTen?.parentNode?.removeChild(tenByTen)
        const welcomeMessage = document.getElementById('welcomeMessage')
        welcomeMessage?.parentNode?.removeChild(welcomeMessage);
    }
}

const gomoku = new app()

