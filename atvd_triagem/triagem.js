// Sistema simples de classificação de atendimento da clínica

// Variáveis de exemplo: troque os valores para testar outros casos.
let corPulseira = "amarela";
let idadePaciente = 65;
let gestante = false;

// A pulseira vermelha indica emergência e tem prioridade máxima.
if (corPulseira === "vermelha") {
  console.log("Atendimento de Emergência: Sala de trauma imediata");

// A pulseira amarela indica urgência.
} else if (corPulseira === "amarela") {
  // || significa OU: basta ser idoso ou gestante para ter prioridade especial.
  if (idadePaciente >= 60 || gestante === true) {
    console.log("Atendimento Urgente: Prioridade Especial Preferencial");
  } else {
    console.log("Atendimento Urgente: Fila padrão amarela");
  }

// Na pulseira verde, o operador ternário escolhe entre Pediatria e Clínica Geral.
} else if (corPulseira === "verde") {
  const encaminhamento = idadePaciente < 12
    ? "Encaminhar para Pediatria"
    : "Encaminhar para Clínica Geral";
  console.log(encaminhamento);

// Qualquer cor fora da lista é desconhecida.
} else {
  alert("Código de cor desconhecido");
}
