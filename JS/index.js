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
                    <div <div class="textCards">
                        <h2>${character.name}</h2>
                        <p>${character.status}</p>
                        <p>${character.species}</p>
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
            <h2>${nameCharacter.name}</h2>
            <p>${nameCharacter.status}</p>
            <p>${nameCharacter.species}</p>
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

