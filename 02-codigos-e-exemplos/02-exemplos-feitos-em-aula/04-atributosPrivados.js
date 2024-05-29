
console.log("\n\nNesse exemplo, nós vamos colocar depósitos na nossa conta e informar que o campo saldo é um atriuto privado. \nIsso é, ele não vai poder ser alterado diretamente!\n");

//criação das classes, que são nossos moldes dos objetos:
class dadosCliente {
    nome;
    CPF;
    RG;
}

class contaCliente{
    _saldo;
    agencia;

    //métodos (funções dentro das classes) para controle de comportamento:
    //função de saques monetários:
    funcaoSacar(valorDeSaque){
        if(valorDeSaque < this._saldo){
            console.log("Não será possível realizar o seu saque. O saldo é menor que o valor requerido!");
        }else{
            //condição para quando o valor de saque for maior ou igual ao valor em conta:
            console.log("O valor de R$ foi sacado com sucesso.");

            //subtraindo o valor sacado do _saldo em conta:
            this._saldo -= valorDeSaque;
            console.log(`Seu novo saldo é de R$: ${this._saldo}`);
        }
    }

    //função de depósitos:
    funcaoDepositar(valorDeDeposito){
        if(valorDeDeposito > 0){
            console.log(`Você depositou R$ ${valorDeDeposito} com sucesso.`);
            
            //fazendo a soma do valor depositado com o _saldo em conta:
            this._saldo += valorDeDeposito;
            console.log(`Novo saldo: ${this._saldo}!\n`);
        }else{
            console.log("\nInfelizmente, não foi possível realizar seu depósito. \nNão há como depositar valores negativos.\n");
        }
    }
}//fim da class contaCliente;

//preenchimento de dados e informações dos clientes:
const cliente1 = new dadosCliente();
cliente1.CPF = 12345678998;
cliente1.RG = 123456789;
cliente1.nome = "Gabriel Lindão";

const contaCliente1 = new contaCliente();
contaCliente1._saldo = 0;
contaCliente1.agencia = 1001;

//exibindo os dados do meu cliente:
console.log(cliente1);
console.log(contaCliente1); 

contaCliente1.funcaoDepositar(650);
contaCliente1.funcaoDepositar(-200);

console.log("\nAonde você ver _nome_de_variável, significa que ali é um atributo privado! Ou seja, ele nãao deve ser alterado diretamente!\n\n");



