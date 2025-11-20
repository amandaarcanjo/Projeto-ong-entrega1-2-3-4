/* ======================================================
   templates.js — Modelos de HTML gerados via JavaScript
   ENTREGRA 4
====================================================== */

const Templates = {
  
  projetoCard: (titulo, descricao, imagem) => {
    return `
      <div class="card col-4">
        <img src="imagens/${imagem}" alt="${titulo}">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
      </div>
    `;
  },

  feedback: (tipo, mensagem) => {
    return `
      <div class="feedback ${tipo}">
        ${mensagem}
      </div>
    `;
  }

};
