/* ======================================================
   app.js — Lógica principal do site
   ENTREGRA 4
====================================================== */

/* ==============================
   Preenchendo lista de projetos
============================== */
const projetos = [
  {
    titulo: "Prótese Clássica 1",
    descricao: "Modelo leve, colorido e funcional para crianças.",
    imagem: "protese1.png"
  },
  {
    titulo: "Prótese Clássica 2",
    descricao: "Modelo reforçado e com ajustes personalizados.",
    imagem: "protese2.png"
  },
  {
    titulo: "Prótese Clássica 3",
    descricao: "Modelo articulado para maior liberdade de movimento.",
    imagem: "protese3.png"
  }
];

if (document.querySelector("#lista-projetos")) {
  let html = "";
  projetos.forEach(p => {
    html += Templates.projetoCard(p.titulo, p.descricao, p.imagem);
  });
  document.querySelector("#lista-projetos").innerHTML = html;
}

/* ==============================
   Formulário de cadastro
============================== */
const formCadastro = document.querySelector("#form-cadastro");

if (formCadastro) {
  formCadastro.addEventListener("submit", function(e) {
    e.preventDefault();

    const resultado = FormValidation.validarCadastro(formCadastro);

    UI.mostrarFeedback("#feedback-form", resultado.ok ? "sucesso" : "erro", resultado.msg);

    if (resultado.ok) {
      formCadastro.reset();
    }
  });
}
