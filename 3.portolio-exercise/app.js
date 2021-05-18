const icon = document.querySelector(".nav-icon");
const linkBox = document.querySelector("#link-box");

icon.addEventListener("click",function(){
    if(linkBox.classList.contains("responsive")){
        linkBox.classList.remove("responsive");
    }else {
        linkBox.classList.add("responsive");
    }
    return false;
});