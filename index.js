const imagens = require("../BdDJSON/imagens.json");

document.addEventListener("DOMContentLoaded", function () {
  const imagemGrid = document.getElementById("imagem-grid");
  const imagemModal = document.getElementById("imagem-modal");

  function exibirMiniaturas() {
    imagemGrid.innerHTML = "";
    imagens.forEach((imagem) => {
      const miniatura = document.createElement("img");
      miniatura.src = imagem.url;
      miniatura.alt = imagem.titulo;
      miniatura.addEventListener("click", () => exibirDetalhes(imagem));
      imagemGrid.appendChild(miniatura);
    });
  }

  function exibirDetalhes(imagem) {
    const modalContent = `
            <img src="${imagem.url}" alt="${imagem.titulo}">
            <h2>${imagem.titulo}</h2>
            <p>${imagem.descricao}</p>
            <p>Autor: ${imagem.autor}</p>
            <p>Data de Criação: ${imagem.dataCriacao}</p>
        `;
    imagemModal.innerHTML = modalContent;
    imagemModal.style.display = "block";
  }

  window.onclick = function (event) {
    if (event.target == imagemModal) {
      imagemModal.style.display = "none";
    }
  };

  exibirMiniaturas();
});