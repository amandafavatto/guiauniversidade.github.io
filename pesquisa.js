const artigos = [{
    title: "5 dicas para estudar de maneira mais eficiente",
    url: "https://guiauniversidade.com/5-dicas-para-estudar-de-maneira-mais-eficiente.html"
  },
  {
    title: "5 habilidades do futuro",
    url: "https://guiauniversidade.com/5-habilidades-do-futuro.html"
  },
  {
    title: "Carreiras em desenvolvimento",
    url: "https://guiauniversidade.com/carreiras-em-desenvolvimento.html"
  },
  {
    title: "Conhecimento obrigatorio para os proximos anos",
    url: "https://guiauniversidade.com/conhecimento-obrigatorio-para-os-proximos-anos.html"
  },
  {
    title: "Dicas sobre pos graduação",
    url: "https://guiauniversidade.com/dicas-sobre-pos-graduacao.html"
  },

  {
    title: "O que você precisa saber sobre o novo fies",
    url: "https://guiauniversidade.com/o-que-voce-precisa-saber-sobre-o-novo-fies.html"
  },
  {
    title: "Tudo sobre credito universitario",
    url: "https://guiauniversidade.com/tudo-sobre-credito-universitario.html"
  },
  {
    title: "Taxa de conclusão do ensino medio",
    url: "https://guiauniversidade.com/taxa-de-conclusao-de-ensino-medio.html"
  },
  
];

// Estes elementos servirão para a manipulação do DOM: elementos HTML
const title = document.getElementById("title");
const list = document.getElementById("artigos");

// Aqui atribuímos uma função ao evento `keyup` do campo no HTML
// Isto é, sempre que uma tecla for pressionada, a função será executada:
title.addEventListener("keyup", function(event) {

  // Filtramos a lista de filmes com base no texto digitado:
  const matchs = artigos.filter(value => {

    // Se o texto digitado for encontrado no título, retorna o registro:
    return value.title.indexOf(this.value) !== -1;

  });
   
  // Exibe no HTML a lista de artigos do resultado do filtro anterior:
  list.innerHTML = "";
  for (let movie of matchs) {
    list.innerHTML += "<li><a href='http://google.com'>"+movie.title+"</a></li>";
  }
});

title.addEventListener("blur", function(event) {
  setTimeout(function(){
    list.innerHTML = "";
  }, 1500);
  });

  
