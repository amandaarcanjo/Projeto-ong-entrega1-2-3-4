/* ======================================================
   ui.js — Controle de interface, exibição de feedbacks
   ENTREGRA 4
====================================================== */

const UI = {
  
  mostrarFeedback: (destino, tipo, mensagem) => {
    const html = Templates.feedback(tipo, mensagem);
    document.querySelector(destino).innerHTML = html;

    setTimeout(() => {
      document.querySelector(destino).innerHTML = "";
    }, 4000);
  }

};
