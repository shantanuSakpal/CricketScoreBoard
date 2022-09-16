let indcount = 0;
let pakcount = 0;
let indscore = document.getElementById("indscore")
let pakscore = document.getElementById("pakscore")

function update() {
    console.log("updated")
    indscore.textContent = indcount;
    pakscore.textContent = pakcount;
    if (indcount > pakcount) {
        document.getElementById("leading1").innerText = "LEADING";
        document.getElementById("leading2").innerText = " ";
        document.getElementById("tie").innerText = "   ";



    }
    else if (indcount < pakcount) {
        document.getElementById("leading2").innerText = "LEADING";
        document.getElementById("leading1").innerText = " ";
        document.getElementById("tie").innerText = "   ";


    }
    else {
        document.getElementById("tie").innerText = "TIE";
        document.getElementById("leading1").innerText = " ";
        document.getElementById("leading2").innerText =  " ";


    }
}


function ind1() {
    indcount++;
    console.log("clicked")
    update();
}
function ind2() {
    indcount += 2;
    update();
}
function ind3() {
    indcount += 4;
    update();
}
function ind4() {
    indcount += 6;
    update();
}
function pak1() {
    pakcount++;
    update();
}
function pak2() {
    pakcount += 2;
    update();
}
function pak3() {
    pakcount += 4;
    update();
}
function pak4() {
    pakcount += 6;
    update();
}
function eraseScore() {
    indcount = 0;
    pakcount = 0;
    update();

}


