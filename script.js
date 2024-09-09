function f1() {
    const textarea = document.getElementById("textarea1");
    textarea.style.fontWeight = textarea.style.fontWeight === "bold" ? "normal" : "bold";
}

function f2() {
    const textarea = document.getElementById("textarea1");
    textarea.style.fontStyle = textarea.style.fontStyle === "italic" ? "normal" : "italic";
}

function f3() {
    const textarea = document.getElementById("textarea1");
    textarea.style.textAlign = textarea.style.textAlign === "left" ? "initial" : "left";
}

function f4() {
    const textarea = document.getElementById("textarea1");
    textarea.style.textAlign = textarea.style.textAlign === "center" ? "initial" : "center";
}

function f5() {
    const textarea = document.getElementById("textarea1");
    textarea.style.textAlign = textarea.style.textAlign === "right" ? "initial" : "right";
}

function f6() {
    const textarea = document.getElementById("textarea1");
    textarea.style.textTransform = textarea.style.textTransform === "uppercase" ? "initial" : "uppercase";
}

function f7() {
    const textarea = document.getElementById("textarea1");
    textarea.style.textTransform = textarea.style.textTransform === "lowercase" ? "initial" : "lowercase";
}

function f8() {
    const textarea = document.getElementById("textarea1");
    textarea.style.textTransform = textarea.style.textTransform === "capitalize" ? "initial" : "capitalize";
}

function f9() {
    const textarea = document.getElementById("textarea1");
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = " ";
}
