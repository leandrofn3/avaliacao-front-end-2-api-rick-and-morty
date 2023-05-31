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
                            <p class="pTextStatus"><p class="circle"></p>${character.status} - ${character.species}</p>
                            <p class="pTitulo">last known location:</p>
                            <p class="pText">${character.location.name}</p>
                        </div>
                </div>`

                // if (character.status === "Alive") {
                //     statusCor = "#56CD42";
                //     statusTexto = "Vivo";
                // } else if (character.status === "Dead") {
                //     statusCor = "#CD4242";
                //     statusTexto = "Morto";
                // } else {
                //     statusCor = "#BBBBBB";
                //     statusTexto = "Desconhecido";
                // }
            });
        })
        .catch(error => console.log(error))
}
