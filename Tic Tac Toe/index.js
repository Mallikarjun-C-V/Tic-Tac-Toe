let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let header = document.querySelector(".header");
let win = document.querySelector(".win");
let new1 = document.querySelector(".new");

let turn = true;

const winnPat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerHTML = "O";
            turn = false;
            box.style.color = "rgb(185, 2, 2)"
        }
        else {
            box.innerHTML = "X";
            turn = true;
            box.style.color = "blue";
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let p of winnPat) {
        let p1 = boxes[p[0]].innerHTML;
        let p2 = boxes[p[1]].innerHTML;
        let p3 = boxes[p[2]].innerHTML;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                showWinner(p1);
            }
        }
    }
};

const showWinner = (value1) => {
    win.innerHTML = `Winner is ${value1}👑`;
    header.classList.remove("hide");
    disable();
}

const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const reseting = () => {
    turn = true;
    enable();
    header.classList.add("hide");
}

reset.addEventListener("click", reseting);
new1.addEventListener("click", reseting);