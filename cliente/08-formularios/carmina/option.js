document.getElementById("option-yes").addEventListener("click", activarDiv); 
document.getElementById("option-no").addEventListener("click", activarDiv); 
function activarDiv() {
    let si = document.getElementById("option-yes").checked;
    let div = document.getElementById("div");
    if (si) {
        div.hidden = false;
    } else {
        div.hidden = true;
    }
}