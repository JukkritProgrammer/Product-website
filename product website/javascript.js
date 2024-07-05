let menu_list = document.getElementById("Menu-List");
let Bar = document.getElementById("Bar");
let Close = document.getElementById("Close");
menu_list.style.height = "0px";

function Toggle() {
    if (menu_list.style.height == "0px") {
        menu_list.style.height = "300px";
        Bar.style.display = "none";
        Close.style.display = "block";
    }
    else {
        menu_list.style.height = "0px";
        Bar.style.display = "block";
        Close.style.display = "none";
    }
}

Close.addEventListener("click", Toggle);
Bar.addEventListener("click", Toggle)