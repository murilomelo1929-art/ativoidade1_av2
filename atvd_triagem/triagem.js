// Sistema de classificação de atendimento da clínica.
// As variáveis são preenchidas com os dados digitados no formulário.
const formulario = document.querySelector("#triage-form");
const caixaResultado = document.querySelector("#resultado");
const textoResultado = document.querySelector("#result-message");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Impede que a página recarregue ao enviar o formulário.

  let corPulseira = document.querySelector("#corPulseira").value;
  let idadePaciente = Number(document.querySelector("#idadePaciente").value);
  let gestante = document.querySelector('input[name="gestante"]:checked').value === "sim";
  let mensagem;

  // Vermelha: emergência imediata.
  if (corPulseira === "vermelha") {
    mensagem = "Atendimento de Emergência: Sala de trauma imediata";
    caixaResultado.className = "result urgent";

  // Amarela: prioridade especial para idosos OU gestantes.
  } else if (corPulseira === "amarela") {
    if (idadePaciente >= 60 || gestante === true) {
      mensagem = "Atendimento Urgente: Prioridade Especial Preferencial";
    } else {
      mensagem = "Atendimento Urgente: Fila padrão amarela";
    }
    caixaResultado.className = "result urgent";

  // Verde: operador ternário escolhe o encaminhamento.
  } else if (corPulseira === "verde") {
    mensagem = idadePaciente < 12
      ? "Encaminhar para Pediatria"
      : "Encaminhar para Clínica Geral";
    caixaResultado.className = "result";

  // Qualquer outra opção é tratada como código desconhecido.
  } else {
    mensagem = "Código de cor desconhecido";
    caixaResultado.className = "result unknown";
    alert("Código de cor desconhecido");
  }
