window.onload = check;
let contResults = document.getElementById("results");

function check(){
    const url = localStorage.getItem("url");
    if (url){
        playVideo(url);
    }
}
function home(){
    localStorage.removeItem("url");
    localStorage.removeItem("result");
    window.location.href="./index.html";
}

function playVideo(url){
    contResults.innerHTML = `        
    <div class="iframeVideo">
        <iframe width="400" height="300" src="https://www.youtube-nocookie.com/embed/${url}?autoplay=1" autoplay; encrypted-media; picture in picture></iframe>
    </div>`;

    localStorage.setItem("url",url);
}
require("./buscar");