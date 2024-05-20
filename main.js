const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(event){
    const tabName = this.getAttribute('data-section');
    const tabToOpen = document.getElementById(tabName);
    
    for (tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    tabToOpen.classList.add("active-tab");
}

for (var i = 0; i < tabLinks.length; i++){
    tabLinks[i].addEventListener("click", openTab);
}

const menuIcon = document.getElementsByClassName("fa-solid menu")[0];
const closeIcon = document.getElementsByClassName("fa-solid close")[0];
const sideMenu = document.getElementById("sidemenu")

menuIcon.addEventListener("click", function(){
    sideMenu.style.right = "0"
})

closeIcon.addEventListener("click", function(){
    sideMenu.style.right = "-200px"
})