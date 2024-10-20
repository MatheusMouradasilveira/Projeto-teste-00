function carregarImagens() {
  fetch("BdDJSON/imagens.json")
    .then((response) => response.json())
    .then((imagens) => {
      const imagemGrid = document.getElementById("imagem-grid");
      imagens.forEach((imagem) => {
        const miniatura = document.createElement("img");
        miniatura.src = imagem.url;
        miniatura.alt = imagem.titulo;
        miniatura.addEventListener("click", () => exibirDetalhes(imagem));
        imagemGrid.appendChild(miniatura);
      });
    })
    .catch((error) => console.error("Erro ao carregar imagens:", error));
}

function exibirDetalhes(imagem) {
  const modalContent = `
        <img src="${imagem.url}" alt="${imagem.titulo}">
        <h2>${imagem.titulo}</h2>
        <p>${imagem.descricao}</p>
        <p>Autor: ${imagem.autor}</p>
        <p>Data de Criação: ${imagem.dataCriacao}</p>
    `;
  const imagemModal = document.getElementById("imagem-modal");
  imagemModal.innerHTML = modalContent;
  imagemModal.style.display = "block";
}

window.onclick = function (event) {
  const imagemModal = document.getElementById("imagem-modal");
  if (event.target == imagemModal) {
    imagemModal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", carregarImagens);