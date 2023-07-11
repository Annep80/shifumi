"use strict";
const buttons = document.querySelectorAll("button");
let win = 0;
let lose = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const player = buttons[i].innerHTML;
        const valuePlayer = buttons[i].id;
        let computer = buttons[Math.floor(Math.random() * buttons.length)];
        const valueComputer = computer.id;
        let imgComputer = computer.querySelector("img:nth-child(2)");
        let resultat = "";

        if (valuePlayer === valueComputer) {
            resultat = "Egalité";
            document.getElementById("audioEgality").play();
            winLose.innerHTML = 'Egalité!'
        } else if (
            (valuePlayer === "rock" && valueComputer === "cisors") ||
            (valuePlayer === "cisors" && valueComputer === "paper") ||
            (valuePlayer === "paper" && valueComputer === "rock")
        ) {
            resultat = "Gagné";
            let scorePlayer = document.getElementById("scorePlayer");
            winLose.innerHTML = 'Les licornes gagnent!'
            win += 1;
            scorePlayer.innerHTML = "Licornes:" + " " + win;
            document.getElementById("audioUnicorn").play();
        } else {
            resultat = "Perdu";
            let scoreComputer = document.getElementById("scoreComputer");
            winLose.innerHTML = 'Les zombies gagnent!'
            lose += 1;
            scoreComputer.innerHTML = "Zombies:" + " " + lose;
            document.getElementById("audioZombie").play();
        }
})}
