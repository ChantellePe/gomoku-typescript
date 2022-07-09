var STATUS;
(function (STATUS) {
    STATUS["AVAILABLE"] = "AVAILABLE";
    STATUS["OCCUPIED"] = "OCCUPIED";
    STATUS["SELECTED"] = "SELECTED";
})(STATUS || (STATUS = {}));
export default class Square {
    constructor(id, isOccupied = false) {
        this.id = id;
        this.status = isOccupied ? STATUS.OCCUPIED : STATUS.AVAILABLE;
        this.element = document.createElement('div');
        this.element.classList.add('square');
        this.element.classList.add(this.status.toLowerCase());
        this.element.addEventListener('click', () => {
            this.handleClick();
        });
    }
    handleClick() {
        if (this.status === STATUS.OCCUPIED)
            return;
        this.element.classList.remove(this.status.toLowerCase());
        this.status = this.status === STATUS.AVAILABLE ? STATUS.SELECTED : STATUS.AVAILABLE;
        this.element.classList.add(this.status.toLowerCase());
    }
    get isSelected() {
        return this.status === STATUS.SELECTED;
    }
}
