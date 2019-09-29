var a = [];


function f1(objButton) {
    let R = objButton.value;
    document.getElementById("hehe").value = R;
    plotV(document.getElementById("hehe").value);
}

function validate(_form) {
    var checkbox = document.querySelector('input[name="X[]"]:checked');
    if (!checkbox) {
        document.getElementById("err").innerHTML = "¬ыберите хот€ бы одно значение ’\n";
        return false;
    }
    var Y = _form.Y.value;
    if (Y < -3 || Y > 3 || isNaN(Y) || Y === "") {
        return false;
    }
    var H = _form.hehe.value;
    if (H < 1 || H > 5 || isNaN(H) || H === "") {
        document.getElementById("err").innerHTML = "¬ыберите значение R\n";
        return false;
    }


}

var goodY = false;
var goodX = false;
var goodR = false;
var goodH = false;

function valY(txt) {
    var Y = txt.value;
    if (Y === "") {
        goodY = false;
    } else {
        goodY = true;
    }
    submitButtonBehavior();
}

function valR() {
    var R = document.getElementById("hehe").value;
    if (R === "") {
        goodR = false;
    } else {
        goodR = true;
    }
    submitButtonBehavior_();
    submitButtonBehavior();
}

function valX() {
    var count = 0;
    var checks = document.forms["form"]["X[]"];
    for (var i of checks) {
        if (i.checked) {
            count += 1;
        }
    }
    if (count < 1) {
        goodX = false
    } else {
        goodX = true;
    }
    submitButtonBehavior();
}
function valH() {
    var H = document.getElementById("Xh").value;
    if (H === "") {
        goodH = false;
    } else {
        goodH = true;
    }
    submitButtonBehavior_();
}

function submitButtonBehavior() {
    var submitButton = document.getElementById("sub");
    if (!(goodX && goodY && goodR)) {
        submitButton.setAttribute("disabled", "disable");
    } else {
        submitButton.removeAttribute("disabled")
    }
}
function submitButtonBehavior_() {
    var submitButton = document.getElementById("sub2");
    if (!(goodR) && !(goodH) ) {
        submitButton.setAttribute("disabled", "disable");
    } else {
        submitButton.removeAttribute("disabled")
    }
}

function plot() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "#7ca1ff";
    ctx.rect(110, 110, 40, -80);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.arc(110, 110, 80, 0, Math.PI / 2, false);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.lineTo(110, 70);
    ctx.lineTo(30, 110);
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

function plotV(r) {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "#7ca1ff";
    ctx.rect(110, 110, 40, -80);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.arc(110, 110, 80, 0, Math.PI / 2, false);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.lineTo(110, 70);
    ctx.lineTo(30, 110);
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

function drawDotInside(x, y, r) {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.rect(Math.round((108 + (x / r) * 80)), Math.round((108 - (y / r) * 80)), 4, 4);
    ctx.fillStyle = "#13e158";
    ctx.closePath();
    ctx.fill();
}

function drawDotOutside(x, y, r) {
    var ctx = document.getElementById("canvas").getContext("2d");
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
    let r = document.getElementById("hehe").value;

    let table = document.getElementById("res");
    x = (x - 108) / 80 * r;
    y = (108 - y) / 80 * r;


    // document.getElementById("Yh").value = y;
    // document.getElementById("Rh").value = r;

    if (
        (x >= 0 && x <= r / 2 && y >= 0 && y <= r) ||
        (x <= 0 && y >= 0 && y <= x / 2 + r / 2) ||
        (x >= 0 && y <= 0 && (x * x + y * y) <= (r * r))
    ) {
        a.push(JSON.stringify(makeCoordinateDto(x, y, r, "TRUE")));
        document.getElementById("Xh").value =  "[" + a + "]";
        drawDotInside(x, y, r);
        if (r !== "") {
            let row = table.insertRow(1);
            row.insertCell(0).innerHTML = x;
            row.insertCell(1).innerHTML = y;
            row.insertCell(2).innerHTML = r;
            row.insertCell(3).innerHTML = "TRUE";
        }
    } else {
        a.push(JSON.stringify(makeCoordinateDto(x, y, r, "FALSE")));
        document.getElementById("Xh").value =  "[" + a + "]";
        drawDotOutside(x, y, r);
        let row = table.insertRow(1);
        row.insertCell(0).innerHTML = x;
        row.insertCell(1).innerHTML = y;
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
    let r = document.getElementById("hehe").value;
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
    let r = document.getElementById("hehe").value;
    if (r === "") {
        document.getElementById("err").style.animation = "fadeInDisappearing .7s";
        document.getElementById("err").style.opacity = 0;

    } else {
        document.getElementById("check").style.animation = "fadeInDisappearing .7s";
        document.getElementById("check").style.opacity = 0;
    }
}

function fakeSubmit() {
    document.getElementById("hiddenForm").submit();
}


