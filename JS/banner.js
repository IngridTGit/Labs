const banners =["img/destaque-home.png", "img/destaque-home-2.png"];
let bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector(".destaque img").src = banners[bannerAtual];
}


setInterval(trocaBanner, 4000);

let timer = setInterval(trocaBanner, 4000);
const controle = document.querySelector(".pause");


controle.addEventListener("click", () => {
    if (controle.className === "pause"){
        clearInterval(timer);
        controle.className = "play";
       } else {
        timer = setInterval(trocaBanner,4000);
        controle.className = "pause";
       }

});