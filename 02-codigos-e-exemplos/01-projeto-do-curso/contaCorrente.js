//criação do método da Conta Corrente:

export class contaCorrente{
    cliente;
    _saldo = 0;
    agencia;

    //MÉTODOS DA NOSSA CLASSE:
    //função de saque:
    funcaoSacar(valorDeSaque){
        //regra para quando o saldo é menor que o valor de saque:
        if (valorDeSaque > this._saldo) {
            console.log("Impossível realizar saques, meu patrão.\nTeu saldo é insulficiente!");
            return 0;
        }
        //código executado em caso de saques coerentes com o saldo!
        this._saldo -= valorDeSaque;
        return valorDeSaque;
        // console.log(`Seu saque de R$ ${valorDeSaque} foi realizado com sucesso!`);
        // console.log(`Novo saldo: R$ ${this._saldo}`);
    }

    //função de depósito:
    funcaoDepositar(valorDepositado){
        //regra para quando valores negativos forem informados:
        if(valorDepositado <= 0){
            // console.log("Impossível depositar o valor informado. Não aceitamos valores negativos ou nulos.");
            return 0;
        }
        //código a ser executado em caso de depósitos válidos!
        this._saldo += valorDepositado;
        // console.log(`Valor depositado: R$ ${valorDepositado}`);
        // console.log(`Novo saldo: R$ ${this._saldo}`);
    }

    //funcao de transferencia:
    funcaoTransferencia(valorDaTransferencia, contaDeDestino){
        const valorTransferido = this.funcaoSacar(valorDaTransferencia);
        contaDeDestino.funcaoDepositar(valorTransferido);
        
    }
}