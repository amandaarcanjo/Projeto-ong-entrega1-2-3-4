/* ======================================================
   ui.js — Interface e mensagens visuais
   ENTREGRA 3
====================================================== */

const UI = {

  showMessage: (msg, tipo = "sucesso") => {
    const area = document.getElementById("feedback-area");
    const html = Templates.feedback(tipo, msg);

    area.innerHTML = html;

    setTimeout(() => {
      area.innerHTML = "";
    }, 3000);
  },

  showFormMessage: (msg, tipo = "sucesso") => {
    const area = document.getElementById("feedback-form");
    const html = Templates.feedback(tipo, msg);
    area.innerHTML = html;
  }

};
