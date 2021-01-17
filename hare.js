var nav_bar = document.querySelector(".nav_bar");
nav_bar.style.right ="-250px";
var menus = document.querySelector(".menu img");

var menu = document.querySelector(".menu").addEventListener("click", function(){
    if(nav_bar.style.right == "-250px"){
        nav_bar.style.right = "0";
        menus.src="images/close.png";
    }

    else{
        nav_bar.style.right = "-250px";
        menus.src="images/menu.png";
    }
})