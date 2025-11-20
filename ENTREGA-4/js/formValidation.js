/* ======================================================
   formValidation.js — Validações de formulário
   ENTREGRA 4
====================================================== */

const FormValidation = {

  validarCadastro: (form) => {
    
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const cidade = form.cidade.value.trim();

    if (!nome || !email || !telefone || !cidade) {
      return { ok: false, msg: "Preencha todos os campos." };
    }

    if (!email.includes("@") || !email.includes(".")) {
      return { ok: false, msg: "Email inválido." };
    }

    if (telefone.length < 14) {
      return { ok: false, msg: "Telefone incompleto." };
    }

    return { ok: true, msg: "Cadastro enviado com sucesso!" };
  }

};
