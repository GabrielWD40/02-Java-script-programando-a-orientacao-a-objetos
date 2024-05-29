//importando uma classe de outro arquivo: 
import {cliente} from "./cliente.js";
import {contaCorrente} from "./contaCorrente.js";

//preenchimento de dados do cleinte:
const cliente1 = new cliente();
cliente1.nome = "Gabriel";
cliente1.CPF = 12345678912;
cliente1.RG = 123456789;

const contaCliente1 = new contaCorrente();
contaCliente1.cliente = cliente1
contaCliente1.agencia = 1234;

const cliente2 = new cliente();
cliente2.nome = "Homer Simpson";
cliente2.CPF = 98765432178;
cliente2.RG = 369258147;

const contaCliente2 = new contaCorrente();
contaCliente2.cliente = cliente2;
contaCliente2.agencia = 5241; 

//exibindo dados na tela:
console.log("\n\n =============== Dados dos clientes: ===============\n");
contaCliente1.funcaoDepositar(1500);
console.log(contaCliente1);
console.log(contaCliente2);


console.log("\n\n =============== Relizando transferência de saldos: ===============\n");
contaCliente1.funcaoTransferencia(500, contaCliente2);
console.log(contaCliente1);
console.log(contaCliente2);



