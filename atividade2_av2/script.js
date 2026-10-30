const consumo = Number(prompt("Qual foi o valor total da conta?"));
    const porcentagem = Number(prompt("Qual porcentagem de gorjeta vocês desejam deixar?"));
    const pessoas = Number(prompt("Em quantas pessoas a conta será dividida?"));

    const gorjeta = consumo * (porcentagem / 100);
    const total = consumo + gorjeta;
    const porPessoa = total / pessoas;

    alert(
      `--- Resumo da Conta ---\n` +
      `Consumo: R$ ${consumo.toFixed(2)}\n` +
      `Gorjeta: R$ ${gorjeta.toFixed(2)}\n` +
      `Total com Gorjeta: R$ ${total.toFixed(2)}\n` +
      `Divisão por pessoa (${pessoas} pessoas): R$ ${porPessoa.toFixed(2)}`
    );