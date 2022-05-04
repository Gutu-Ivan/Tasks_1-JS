class Tasks {
    constructor() {
        this.btn = document.querySelector(".btn");
        this.text = document.querySelector(".txt");
        this.li = document.querySelector("li");
        this.table = document.getElementById("users");
    }
    verifyArray() {
        let numericArray = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

        let valuesLessThanFive = numericArray.filter(num => num < 5);
        let MinMaxIndexes = [numericArray.indexOf(Math.max.apply(Math, numericArray)), numericArray.indexOf(Math.min.apply(Math, numericArray))];
        let descendingArray = numericArray.sort((a, b) => a - b);
        let averageValue = numericArray.reduce((a, b) => a + b)/numericArray.length;
        let biggestValues = numericArray.filter(num => num > averageValue);

        console.log("Values less than five:", valuesLessThanFive);
        console.log("Minimum and maximum indexes:", MinMaxIndexes);
        console.log("Reverse array:", descendingArray);
        console.log("Values that are greater than average of array:", biggestValues);
    }

    checkColor(color) {
        let colors = ["red", "green", "blue"];

        console.log("Position of the color in array:",colors.indexOf(color));
    }

    sumAllSalaries() {
        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        };
        let sum;

        if (Object.keys(salaries).length === 0) {
            sum = 0;
        } else{
            sum = Object.values(salaries).reduce((a,b) => a + b);
        }

        console.log("The sum of all salaries:",sum);
    }

    // Wrong
    removeIncorrectDots() {
        let dots = [
            {x: 1, y: 2},
            {x: 3, y: 4},
            {x: null, y: 4},
            {x: 3, y: undefined}
        ];
        let x = dots.map(dot => dot.x);
        let y = dots.map(dot => dot.y);

        if (typeof x == null || undefined) {
            console.log('Error x')
        } else if (typeof y ==  null || undefined) {
            console.log('Error y')
        }
        else {
            console.log('No errors')
        }
    }
    buildChessBoard() {
        let field = document.querySelector('.field');
        let cells = 64;
        let html = '';

        for (let i = 0; i < cells/8; i++) {
            for (let j = 0; j < cells/8; j++) {
                if ((i+j) % 2 == 0) {
                    html += `<div class='black__cell'></div>`;
                } else{
                    html += `<div class='white__cell'></div>`;
                }
            }
        }
        field.innerHTML = html;
    }
    checkValue(){
        if (this.text.value.length === 0){
            this.btn.disabled = true;
        } else {
            this.btn.disabled = false;
        }
    }
    addToList() {
        let list = document.getElementsByTagName("ol")[0];
        let item = document.createElement("li");

        if (this.text.value === ''){
            this.btn.disabled = true;
        } else {
            this.btn.disabled = false;
            item.innerHTML = `${this.text.value}`
            list.appendChild(item)
            this.text.value = '';
        }

    }
    deleteRow(value) {
        let id = value.parentNode.parentNode.rowIndex;
        this.table.deleteRow(id);
    }
    addRow() {
        let row = this.table.insertRow(0);
        let col = row.insertCell(0);
        let col2 = row.insertCell(1);
        let user = document.querySelector(".user");

        this.table.appendChild(row)
        if (!row) {
            return row;
        }

        col.innerHTML = user.value;
        col2.innerHTML = `<input type="button" onclick="tasks.deleteRow(this)" value="Remove">`
        row.appendChild(col);
        row.appendChild(col2);
    }

}

const tasks = new Tasks();
document.addEventListener("DOMContentLoaded", () => {

    tasks.verifyArray();
    tasks.checkColor("red");
    tasks.sumAllSalaries();
    tasks.removeIncorrectDots();
    tasks.buildChessBoard();

});