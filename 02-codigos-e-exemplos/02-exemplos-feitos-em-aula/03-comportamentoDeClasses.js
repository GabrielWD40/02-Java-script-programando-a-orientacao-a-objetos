//Criando as classes do nosso programa Bytebanco
class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    saldoEmConta;

    //criando regras para as funções de saque dentro do nosso objeto!
    //Chamamos isso de métodos dos objetos!
    funcaoSacar(valorDoSaque){
        //regra de negócio: só pode sacar o valor se o seu saldo for maior que ele!
        if(this.saldoEmConta >= valorDoSaque){
            this.saldoEmConta -= valorDoSaque;
            console.log(`Você realizou um saque no valor de R$: ${valorDoSaque}\n Seu novo saldo é de R$ ${this.saldoEmConta}\n\n`);
        }else{
            console.log('Infelizmente, não é possível sacar o valor solicitado! Ele é maior que o seu saldo.');
        }
    }
}

//apresentação de dados ao usuário:
console.log("\n\nVamos bricar com os métodos dentro de JavaScrip. Nessa opção, vamos tentar fazer dois saques!");
console.log("\nUm deles será menor que o saldo da conta corrente, o outro será menor. Nosso software não poderá deixar usuários sacarem mais do que eles tem!");

console.log("\nNessa primeira tentativa, vamos fazer um saque de 200 reais. Tem que dar erro!");
console.log("\nVamos simular que em nossa conta haja 150 reais e eu tento sacar 200!");

//criação do objeto da conta de Jão Porqueira:
const clienteJaoPorqueira = new Cliente();
clienteJaoPorqueira.nome = "Jão Porqueira";
clienteJaoPorqueira.cpf = 11122233345;
clienteJaoPorqueira.rg = 111555666;

const contaJaoPorqueira = new ContaCorrente();
clienteJaoPorqueira.agencia = 1001;
clienteJaoPorqueira.saldoEmConta = 150;

console.log("\nJãoPorqueira vai ao banco para tentar enganar o sistema ao tentar sacar mais que o seu saldo e se depara com a seguinte mensagem: \n");
contaJaoPorqueira.funcaoSacar(200);

console.log("\n\nAgora, vamos lidar com um cliente exemplar, o Gabriel. Ele vai fazer um saque de 20 reais e se deparar com a seguinte mensagem:")
//criação do objeto da conta de Gabriel:
const clienteGabriel = new Cliente();
clienteGabriel.nome = "Gabriel Silva";
clienteGabriel.cpf = 11222233345;
clienteGabriel.rg = 116555666;

const contaGabriel = new ContaCorrente();
contaGabriel.agencia = 1234;
contaGabriel.saldoEmConta = 200;
contaGabriel.funcaoSacar(20);