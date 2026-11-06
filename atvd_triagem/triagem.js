const formulario = document.querySelector("#triage-form");
const caixaResultado = document.querySelector("#resultado");
const textoResultado = document.querySelector("#result-message");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let corPulseira = document.querySelector("#corPulseira").value;
  let idadePaciente = Number(
    document.querySelector("#idadePaciente").value
  );
  let gestante =
    document.querySelector('input[name="gestante"]:checked').value === "sim";

  let mensagem;

  if (corPulseira === "vermelha") {
    mensagem = "Atendimento de Emergência: Sala de trauma imediata";
    caixaResultado.className = "result urgent";

  } else if (corPulseira === "amarela") {
    if (idadePaciente >= 60 || gestante === true) {
      mensagem = "Atendimento Urgente: Prioridade Especial Preferencial";
    } else {
      mensagem = "Atendimento Urgente: Fila padrão amarela";
    }

    caixaResultado.className = "result urgent";

  } else if (corPulseira === "verde") {
    mensagem = idadePaciente < 12
      ? "Encaminhar para Pediatria"
      : "Encaminhar para Clínica Geral";

    caixaResultado.className = "result";

  } else {
    mensagem = "Código de cor desconhecido";
    caixaResultado.className = "result unknown";
    alert("Código de cor desconhecido");
  }

  textoResultado.textContent = mensagem;
  caixaResultado.hidden = false;

  console.log(mensagem);
});
