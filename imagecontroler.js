const imagens = require("../BdDJSON/imagens.json");

function listarImagens(req, res) {
  res.json(imagens);
}

function obterDetalhesImagem(req, res) {
  const id = parseInt(req.params.id);
  const imagem = imagens.find((imagem) => imagem.id === id);
  if (imagem) {
    res.json(imagem);
  } else {
    res.status(404).json({ mensagem: "Imagem não encontrada" });
  }
}

module.exports = {
  listarImagens,
  obterDetalhesImagem,
};