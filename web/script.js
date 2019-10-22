
let goodY = false;
let goodX = false;
let goodR = false;

function validate(_form) {
    let checkbox = document.querySelector('input[name="R[]"]:checked');
    if (!checkbox) {
        document.getElementById("err").innerHTML = "Выберите хотя бы одно значение Х\n";
        return false;
    }
    let X = _form.X.value;
    if (X < -5 || X > 3 || isNaN(Y) || X === "") {
        return false;
    }
    let radios = document.getElementsByName("Y");
    while (i < radios.length) {
        if (!radios[i].checked) return false;
        i++;
    }
    return true;
}

function valX(txt) {
    let X = txt.value;
    if (X === "") {
        goodX = false;
    } else {
        goodX = true;
    }
    submitButtonBehavior();
}

function valY() {
    let count = 0;
    let radios = document.forms["form"]["Y"];
    for (let i of radios) {
        if (i.checked) {
            count += 1;
        }
    }
    if (count < 1) {
        goodY = false
    } else {
        goodY = true;
    }
    submitButtonBehavior();
}

function valR() {
    let count = 0;
    let checks = document.forms["form"]["R[]"];
    for (let i of checks) {
        if (i.checked) {
            count += 1;
        }
    }
    if (count < 1) {
        goodR = false
    } else {
        goodR = true;
    }
    submitButtonBehavior();
}

function submitButtonBehavior() {
    let submitButton = document.getElementById("sub");
    if (!(goodX && goodY && goodR)) {
        submitButton.setAttribute("disabled", "disable");
    } else {
        submitButton.removeAttribute("disabled")
    }
}


function plot() {
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "#7ca1ff";
    ctx.rect(110, 110, -40, -80);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.arc(110, 110, 80, Math.PI/2, Math.PI, false);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.lineTo(150,110);
    ctx.lineTo(110,150);
    ctx.lineTo(110, 110);
    ctx.closePath();
    ctx.fill();

    // оси
    ctx.beginPath();
    ctx.moveTo(110, 0);
    ctx.lineTo(110, 230);
    ctx.moveTo(0, 110);
    ctx.lineTo(230, 110);

    // стрелки осей
    ctx.moveTo(110, 0);
    ctx.lineTo(113, 5);
    ctx.moveTo(110, 0);
    ctx.lineTo(107, 5);

    ctx.moveTo(230, 110);
    ctx.lineTo(225, 113);
    ctx.moveTo(230, 110);
    ctx.lineTo(225, 107);


    // засечки x
    ctx.fillStyle = "#121164";
    ctx.moveTo(30, 115);
    ctx.lineTo(30, 105);
    ctx.fillText("-R", 26, 125);

    ctx.moveTo(70, 115);
    ctx.lineTo(70, 105);
    ctx.fillText("-R/2", 60, 125);

    ctx.moveTo(150, 115);
    ctx.lineTo(150, 105);
    ctx.fillText("R/2", 144, 125);

    ctx.moveTo(190, 115);
    ctx.lineTo(190, 105);
    ctx.fillText("R", 186, 125);

    // засечки y
    ctx.moveTo(115, 150);
    ctx.lineTo(105, 150);
    ctx.fillText("-R/2", 117, 153);

    ctx.moveTo(115, 190);
    ctx.lineTo(105, 190);
    ctx.fillText("-R", 117, 193);

    ctx.moveTo(115, 70);
    ctx.lineTo(105, 70);
    ctx.fillText("R/2", 117, 73);

    ctx.moveTo(115, 30);
    ctx.lineTo(105, 30);
    ctx.fillText("R", 117, 33);

    ctx.fillText("y", 115, 6);
    ctx.fillText("x", 224, 120);
    ctx.stroke();
}


function createCanvas(i) {
    let canvas = document.createElement("canvas");
        canvas.className = 'canvas';
        canvas.width = 230;
        canvas.height = 230;
        canvas.id = 'canvas' + i;
        canvas.style.cssText = "border:1px solid #d3d3d3";
        canvas.classList.add('canvas');
    document.body.appendChild(canvas);
}

function plotV(r, i) {
    createCanvas(i);
    let ctx = document.getElementById("canvas" + i).getContext("2d");
    ctx.clearRect(0, 0, 230, 230);
    ctx.beginPath();
    ctx.fillStyle = "#7ca1ff";
    ctx.rect(110, 110, -40, -80);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.arc(110, 110, 80, Math.PI/2, Math.PI, false);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.lineTo(150,110);
    ctx.lineTo(110,150);
    ctx.lineTo(110, 110);
    ctx.closePath();
    ctx.fill();

    // оси
    ctx.beginPath();
    ctx.moveTo(110, 0);
    ctx.lineTo(110, 230);
    ctx.moveTo(0, 110);
    ctx.lineTo(230, 110);

    // стрелки осей
    ctx.moveTo(110, 0);
    ctx.lineTo(113, 5);
    ctx.moveTo(110, 0);
    ctx.lineTo(107, 5);

    ctx.moveTo(230, 110);
    ctx.lineTo(225, 113);
    ctx.moveTo(230, 110);
    ctx.lineTo(225, 107);


    // засечки x
    ctx.fillStyle = "#121164";
    ctx.moveTo(30, 115);
    ctx.lineTo(30, 105);
    ctx.fillText("-" + r, 26, 125);

    ctx.moveTo(70, 115);
    ctx.lineTo(70, 105);
    ctx.fillText("-" + r + "/2", 60, 125);

    ctx.moveTo(150, 115);
    ctx.lineTo(150, 105);
    ctx.fillText(r + "/2", 144, 125);

    ctx.moveTo(190, 115);
    ctx.lineTo(190, 105);
    ctx.fillText(r, 186, 125);

    // засечки y
    ctx.moveTo(115, 150);
    ctx.lineTo(105, 150);
    ctx.fillText("-" + r + "/2", 117, 153);

    ctx.moveTo(115, 190);
    ctx.lineTo(105, 190);
    ctx.fillText("-" + r, 117, 193);

    ctx.moveTo(115, 70);
    ctx.lineTo(105, 70);
    ctx.fillText(r + "/2", 117, 73);

    ctx.moveTo(115, 30);
    ctx.lineTo(105, 30);
    ctx.fillText(r, 117, 33);

    ctx.fillText("y", 115, 6);
    ctx.fillText("x", 224, 120);
    ctx.stroke();
}

function plotW(r) {
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, 230, 230);
    ctx.beginPath();
    ctx.fillStyle = "#7ca1ff";
    ctx.rect(110, 110, -40, -80);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.arc(110, 110, 80, Math.PI/2, Math.PI, false);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.lineTo(150,110);
    ctx.lineTo(110,150);
    ctx.lineTo(110, 110);
    ctx.closePath();
    ctx.fill();

    // оси
    ctx.beginPath();
    ctx.moveTo(110, 0);
    ctx.lineTo(110, 230);
    ctx.moveTo(0, 110);
    ctx.lineTo(230, 110);

    // стрелки осей
    ctx.moveTo(110, 0);
    ctx.lineTo(113, 5);
    ctx.moveTo(110, 0);
    ctx.lineTo(107, 5);

    ctx.moveTo(230, 110);
    ctx.lineTo(225, 113);
    ctx.moveTo(230, 110);
    ctx.lineTo(225, 107);


    // засечки x
    ctx.fillStyle = "#121164";
    ctx.moveTo(30, 115);
    ctx.lineTo(30, 105);
    ctx.fillText("-" + r, 26, 125);

    ctx.moveTo(70, 115);
    ctx.lineTo(70, 105);
    ctx.fillText("-" + r + "/2", 60, 125);

    ctx.moveTo(150, 115);
    ctx.lineTo(150, 105);
    ctx.fillText(r + "/2", 144, 125);

    ctx.moveTo(190, 115);
    ctx.lineTo(190, 105);
    ctx.fillText(r, 186, 125);

    // засечки y
    ctx.moveTo(115, 150);
    ctx.lineTo(105, 150);
    ctx.fillText("-" + r + "/2", 117, 153);

    ctx.moveTo(115, 190);
    ctx.lineTo(105, 190);
    ctx.fillText("-" + r, 117, 193);

    ctx.moveTo(115, 70);
    ctx.lineTo(105, 70);
    ctx.fillText(r + "/2", 117, 73);

    ctx.moveTo(115, 30);
    ctx.lineTo(105, 30);
    ctx.fillText(r, 117, 33);

    ctx.fillText("y", 115, 6);
    ctx.fillText("x", 224, 120);
    ctx.stroke();
}

function drawDotInside(x, y, r, i) {
    let ctx = document.getElementById("canvas" + i).getContext("2d");
    ctx.beginPath();
    ctx.rect(Math.round((108 + (x / r) * 80)), Math.round((108 - (y / r) * 80)), 4, 4);
    ctx.fillStyle = "#13e158";
    ctx.closePath();
    ctx.fill();
}

function drawDotOutside(x, y, r, i) {
    let ctx = document.getElementById("canvas" + i).getContext("2d");
    ctx.beginPath();
    ctx.rect(Math.round((108 + (x / r) * 80)), Math.round((108 - (y / r) * 80)), 4, 4);
    ctx.fillStyle = "#e11751";
    ctx.closePath();
    ctx.fill();
}


function makeCoordinateDto(x, y, r, ch) {
    return {
        x: x,
        y: y,
        r: r,
        check: ch
    };
}

function setPoint(event) {
    let canvas = document.getElementById("canvas");
    let rect = canvas.getBoundingClientRect();
    let offset = (rect.width - canvas.width) / 2 + 1;
    let x = event.clientX - rect.left - offset;
    let y = event.clientY - rect.top - offset;
    let r = document.getElementById("hiddenR").value;

    let table = document.getElementById("res");
    x = (x - 108) / 80 * r;
    y = (108 - y) / 80 * r;
    let ctx = document.getElementById("canvas").getContext("2d");

    if (
        (x >= -r/2 && x <= 0 && y >= 0 && y <= r) ||
        (x >= 0 && y <= 0 && y >= x - r/2) ||
        (x <= 0 && y <= 0 && (x * x + y * y) <= (r * r))

    ) {
        a.push(JSON.stringify(makeCoordinateDto(x, y, r, "TRUE")));

        ctx.beginPath();
        ctx.rect(Math.round((108 + (x / r) * 80)), Math.round((108 - (y / r) * 80)), 4, 4);
        ctx.fillStyle = "#13e158";
        ctx.closePath();
        ctx.fill();
        if (r !== "") {
            let row = table.insertRow(-1);
            row.insertCell(0).innerHTML = x.toFixed(2);
            row.insertCell(1).innerHTML = y.toFixed(2);
            row.insertCell(2).innerHTML = r;
            row.insertCell(3).innerHTML = "TRUE";
        }
    } else {
        a.push(JSON.stringify(makeCoordinateDto(x, y, r, "FALSE")));
        ctx.beginPath();
        ctx.rect(Math.round((108 + (x / r) * 80)), Math.round((108 - (y / r) * 80)), 4, 4);
        ctx.fillStyle = "#e11751";
        ctx.closePath();
        ctx.fill();
        let row = table.insertRow(1);
        row.insertCell(0).innerHTML = x.toFixed(2);
        row.insertCell(1).innerHTML = y.toFixed(2);
        row.insertCell(2).innerHTML = r;
        row.insertCell(3).innerHTML = "FALSE";
    }
}

function showCoords(event) {
    let canvas = document.getElementById("canvas");
    let rect = canvas.getBoundingClientRect();
    let offset = (rect.width - canvas.width) / 2 + 1;
    let x = event.clientX - rect.left - offset;
    let y = event.clientY - rect.top - offset;
    let checkbox = document.querySelector('input[name="R[]"]:checked');
    if (checkbox) {
        document.getElementById("hiddenR").value = checkbox.value;
    } else {
        document.getElementById("hiddenR").value = "";
    }
    let r = document.getElementById("hiddenR").value;
    x = (x - 108) / 80 * r;
    y = (108 - y) / 80 * r;
    if (r === "") {
        document.getElementById("err").style.animation = "appearing .5s";
        document.getElementById("err").style.opacity = 1;
        document.getElementById("err").innerHTML = "You should define R";

    } else {
        document.getElementById("check").style.animation = "appearing .5s";
        document.getElementById("check").style.opacity = 1;
        document.getElementById("check").innerHTML = "X: " + x.toFixed(2) + " | Y: " + y.toFixed(2) + " | R: " + r;
    }
}

function eraseCoords() {
    let r = document.getElementById("hiddenR").value;
    if (r === "") {
        document.getElementById("err").style.animation = "fadeInDisappearing .7s";
        document.getElementById("err").style.opacity = 0;

    } else {
        document.getElementById("check").style.animation = "fadeInDisappearing .7s";
        document.getElementById("check").style.opacity = 0;
    }
}

function applyHiddenR() {
    let hiddenR = document.getElementById("hiddenR").value;
    let checkbox = document.querySelector('input[name="R[]"]:checked');
    if (checkbox) {
        hiddenR = checkbox.value;
        plotW(hiddenR);
    } else {
        hiddenR = "";
        plot();
    }

}


