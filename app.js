//array --> variável com subdivisões (indices)

let filmes = [
    "images/chegada.png" , 
    "images/yesterday.png" , 
    "images/escola.png" , 
]

//refatoração --> mlhorar um código existente.

function CarregarFilmes(){  
    let totalFilmes = filmes.length
    let divListaFilmes = document.querySelector(".lista-filmes")

    divListaFilmes.innerHTML = ""
    //laço de repetição
    for(let i = 0 ; i < totalFilmes ; i++){
       divListaFilmes.innerHTML += "<img src="+ filmes [i] + ">"
    }    
}

function AdicionarFilme(){
    let nomeFilme = document.querySelector("#nome-do-filme").value
    let caminhoCompleto = "images/" + nomeFilme

    filmes.push(caminhoCompleto)


    CarregarFilmes()
}