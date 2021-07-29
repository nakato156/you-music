const axios = require('axios');
const api_key = process.env.API_KEY;
const database = require('../db/conection')

const busquedad = document.getElementById("busquedad");
busquedad.addEventListener("submit",buscar);

let contResults = document.getElementById("results");

async function buscar(e){
    e.preventDefault()
    const buscar = document.getElementById("buscar")
    if (!buscar.value) return;
    const params = `maxResults=4&part=snippet&q=${buscar.value}&type=video`
    const options =  {
        header:{
            'Accept': "application/json"
        } 
    }

    axios.get(`https://www.googleapis.com/youtube/v3/search?${params}&key=${api_key}`,options)
    .then((results)=> {
        const data = results.data.items
        temp = ""
        data.forEach(res=>{
            temp += `
            <div class="videosResults" onclick="playVideo('${res.id.videoId}')">
                <div class="vdtitle">
                    <p>${res.snippet.title}</p>
                </div>
                <div class="mineture" vd-id="${res.id.videoId}">
                    <img src="${res.snippet.thumbnails.medium.url}">
                </div>
            </div>`
        });
        contResults.innerHTML = temp
        saveSearch(buscar.value)
    });
}

async function saveSearch(value){
    await database.add({
        search: value
    }, { merge: true });
}