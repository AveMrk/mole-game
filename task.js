let dead_count = document.getElementById("dead");
let lost_count = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
};

function endGame(text){
    alert(text);
    dead_count.textContent = 0;
    lost_count.textContent = 0;
}

for (let i = 1; i<10; i++) {
    let hole = getHole(i);
    let text;
    hole.onclick = function() {
        if (hole.className.includes("hole_has-mole")){
            dead_count.textContent = Number(dead_count.textContent)+1;
            if (dead_count.textContent == 10){
                text = "Вы победили!";
                endGame(text);
            }
        } else {
            lost_count.textContent = Number(lost_count.textContent)+1;
            if (lost_count.textContent == 5){
                text = "Вы проиграли!";
                endGame(text)
            };
        };
    };
};


