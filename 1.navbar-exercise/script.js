const navbarMenuButton = document.getElementById("navbarMenu");
const navLinksList = document.getElementById("rightBar");

document.getElementById("navbarMenu").addEventListener("click",() => {
    if(navbarMenuButton.classList.contains("collapsed")){
        navbarMenuButton.classList.remove("collapsed");
        navLinksList.classList.add("show");
    }else{
        navbarMenuButton.classList.add("collapsed");
        navLinksList.classList.remove("show");
    }
});

