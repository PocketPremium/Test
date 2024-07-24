let n = OmegaNum(0);
let label = document.getElementById("amount");

function addClick() {
    n = n.add(1);
    label.innerHTML = n.toString();
}
function mulClick() {
    n = n.mul(10);
    label.innerHTML = n.toString();
}
function powClick() {
    n = n.pow(10);
    label.innerHTML = n.toString();
}

function tetrClick() {
    n = n.tetrate(10);
    label.innerHTML = n.toString();
}

function pentClick() {
    n = n.pentate(10);
    label.innerHTML = n.toString();
}
