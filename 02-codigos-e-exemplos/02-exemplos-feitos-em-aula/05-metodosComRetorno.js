//criação da classe conta do cliente:
class contaCliente{
    _saldo = 0;
    agencia;

    //MÉTODOS PARA SAQUES
    funcaoSaque(valorDoSaque){
        //aplicando o método com retorno:
        //colamos tudo o que não queremos que aconteça no primeiro if:
        if(!(this._saldo >= valorDoSaque)){
            //encerramento da execução da função em caso de saldo insulficiente!
            console.log("Impossível realizar seu saque. Seu saldo é insulficiente!");
            return;
        }
        this._saldo -= valorDoSaque;
        console.log(`Valor sacado: R$ ${valorDoSaque}`);
        console.log(`Seu novo saldo é R$ ${this._saldo}`);
    }

    //METODOS PARA DEPÓSITOS
    funcaoDepositar(valorDoDeposito){
        //aplicação do método com retorno:
        if(valorDoDeposito <= 0){
            //encerrando a função caso tentem depositar valores negativos ou, um valor nulo.
            console.log("Impossível realizar depósitos negativos, tá doido Jão? Tá tiranô?");
            return;
        }
        this._saldo += valorDoDeposito;
        console.log(`Valor depositado: R$ ${valorDoDeposito}`);
        console.log(`Novo saldo: R$ ${this._saldo}`);
    }
}

//Atribuição de valores às contas do cliente;
const contaCliente1 = new contaCliente();
contaCliente1.agencia = 1001;
/*Como a variável _saldo é privada, nós não atribuímos valores a ela diretamente! Só através de saques e depósitos.*/

//FAZENDO SAQUES INVIÁVEIS:
console.log("\n\nAgora, vamos fazer saques e depósitos válidos e inválidos!");
console.log("\nPrimeiro, vamos tentar sacar dinheiro de uma conta zerada;");
contaCliente1.funcaoSaque(100);

//FAZENDO DEPÓSITOS VÁLIDOS:
console.log("\n========================================================================");
console.log("\nAgora, vamos depositar um valor bem agradável!");
contaCliente1.funcaoDepositar(12500.35);

//FAZENDO DEPÓSITOS INVÁLIDOS:
console.log("\n========================================================================");
console.log("\nAgora, vamos fazer um depósito de -5 reais. Bem toooooongo!");
contaCliente1.funcaoDepositar(-5);

//FAZENDO UM SAQUE VÁLIDO!
console.log("\n========================================================================");
console.log("E por fim, vamos fazer um saque válido. \nHora de torrar essa grana com muitas primas....");
contaCliente1.funcaoSaque(5000);

console.log("\n========================================================================");
console.log("FOI ISSO QUE APRENDEMOS NESSA AULA, MELHOR LEGIBILIDADE DE CÓDIGOS E FUNÇÕES (MÉTODOS) COM RETORNOS!\n\n");



