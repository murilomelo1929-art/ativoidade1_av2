const valorConsumo = prompt("Qual é o valor total da conta?");
const pessoasMesa =prompt("Em quantas pessoas o valor será dividido?");
const valor_por_pessoa =   Number(valorConsumo)/Number(pessoasMesa);
alert(`--- Resumo da Conta ---\n
    consumo = R$ ${valorConsumo}\n
    Divisão por pessoa ${pessoasMesa}: R$ ${valor_por_pessoa}`);