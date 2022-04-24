const nav = document.getElementsByTagName("nav")[0]
const li = nav.getElementsByTagName("li")

let path
let reload_nav = ()=>{  //selectione le bon boutton dans la nav
    path = window.location.pathname
    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("selected")
    }
    if (path =="/" | path =="/index.html") {
        li[0].classList.add("selected")
    }else if (path == "/presentation.html"){
        li[1].classList.add("selected")
    }else if (path == "/hist_info.html"){
        li[2].classList.add("selected")
    }else if (path == "/sources.html"){
        li[3].classList.add("selected")
    }
}


reload_nav()

for (let j = 0; j < 4; j++) {
    li[j].addEventListener("click", () => {
        setTimeout(() => {reload_nav()}, 2)
    })
}

const menu_button = document.getElementById("menu_button")
const menu = document.getElementById("menu")

menu_button.addEventListener("click", () => {
    let main = document.getElementById("swup")
    menu_button.classList.toggle("open")
    menu.classList.toggle("closed")
    main.classList.toggle("closed")

})

function easter(){
    console.log("click")
    alert("vous avez trouvez l'easter egg!! (est ce que je peux avoir 20/20 😊 svp...)")
}


function closeNavBar(media){
    if (media.matches){
        let main = document.getElementById("swup")
        menu_button.classList.remove("open")
        menu.classList.add("closed")
        main.classList.add("closed")
    }else{
        let main = document.getElementById("swup")
        menu_button.classList.add("open")
        menu.classList.remove("closed")
        main.classList.remove("closed")
    }
}
let media = window.matchMedia("(max-width: 768px)");
closeNavBar(media);
media.addListener(closeNavBar)
 




