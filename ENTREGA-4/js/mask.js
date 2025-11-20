
/* ======================================================
   mask.js — Máscaras simples de formulário
   ENTREGRA 4
====================================================== */

const Mask = {

  telefone: (input) => {
    let v = input.value.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    input.value = v;
  }

};
