document.getElementById("menu").hidden = true;
document.getElementById("menubox").hidden = true;

document.getElementById("nav").onmouseenter = function() {
    document.getElementById("menu").hidden = false;
    document.getElementById("menubox").hidden = false;
    document.getElementById("menubox" && "menu").onmouseleave = function() {
        document.getElementById("menu").hidden = true;
        document.getElementById("menubox").hidden = true;
    }

}
