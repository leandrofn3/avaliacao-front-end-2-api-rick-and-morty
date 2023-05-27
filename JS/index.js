window.onload = () => {
    getcharacters()
}

const url = "https://rickandmortyapi.com/api"
const api = axios.create({
    baseURL: url
});

function getcharacters() {
    api.get("/character")
        .then(response => {
            const data = response.data.results
            let cards = document.getElementById("cardsContainer");
            cards.innerHTML = "";
            data.forEach(character => {
                cards.innerHTML += `<div class="cards">
                        <img src="${character.image}" >
                        <div class="textCards">
                            <h2>${character.name}</h2>
                            <p class="pText">${character.status} - ${character.species}</p>
                            <p class="pTitulo">last known location:</p>
                            <p class="pText">${character.location.name}</p>
                            
                        </div>
                </div>`
            });
        })
        .catch(error => console.log(error))

    function buscarPersonagem(data) {
        const pesquisar = document.getElementById('perquisar').value;
        let cards = document.getElementById("cardsContainer");
        cards.innerHTML = ""
        const nameCharacter = data.filter(character => character.name.toLowerCase() === pesquisar.toLowerCase())
        cards.innerHTML = `<div>
                        <img src="${nameCharacter.image}" >
                        <div class="textCards">
                            <h2>${nameCharacter.name}</h2>
                            <p class="pText">${nameCharacter.status} - ${nameCharacter.species}</p>
                            <p class="pTitulo">last known location:</p>
                            <p class="pText">${nameCharacter.location.name}</p>
                            
                        </div>
            </div>`
    }

}

// mudar o formulario tirar e colocar em uma div
// fazer o filtro, estruturar


// function oneCharcters (){
//     api.get(`/character/3`)
//     .then(response => {
//         const data = response.data
//         document.getElementById("cardsContainer").innerHTML = JSON.stringify(data);
//     })
//     .catch(error => console.log(error))
// }

// oneCharcters()

