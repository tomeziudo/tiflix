function CarregarFilmes(){
    //array --> variável com subdivisões (indices)

    let filmes = ["images/chegada.png" , "images/yesterday.png" , "images/escola.png" , "images/alladin.jpg" , "images/marvel.jpg" , "images/avatar.jpg"]

    //laço de repetição
    for(let controle = 0 ; controle < 6 ; controle = controle + 1){
        document.querySelector(".lista-filmes").innerHTML += "<img src="+ filmes [controle] + ">"
    }

    
}