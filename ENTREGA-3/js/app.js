/* ======================================================
   app.js — Script principal do site
   ENTREGRA 3
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  /* ===========================================
     INSERIR PROJETOS AUTOMATICAMENTE (exemplo)
  ============================================ */

  const lista = document.getElementById("lista-projetos");

  if (lista) {
    const projetos = [
      {
        titulo: "Super-Heróis do Futuro",
        descricao: "Próteses temáticas inspiradas em heróis para elevar a autoestima.",
        imagem: "protese1.png"
      },
      {
        titulo: "Mãos para Estudar",
        descricao: "Modelos funcionais para escrita, leitura e uso escolar.",
        imagem: "protese2.png"
      },
      {
        titulo: "Esporte é Vida",
        descricao: "Próteses adaptadas para esportes, corrida e ciclismo.",
        imagem: "protese3.png"
      }
    ];

    projetos.forEach(p => {
      lista.innerHTML += Templates.projetoCard(p.titulo, p.descricao, p.imagem);
    });
  }


  /* ===========================================
     VALIDAÇÃO DO FORMULÁRIO
  ============================================ */

  const form = document.getElementById("form-cadastro");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const validacao = FormValidation.validarCadastro(form);

      if (!validacao.ok) {
        UI.showFormMessage(validacao.msg, "erro");
      } else {
        UI.showFormMessage(validacao.msg, "sucesso");
        form.reset();
      }
    });
  }

});
