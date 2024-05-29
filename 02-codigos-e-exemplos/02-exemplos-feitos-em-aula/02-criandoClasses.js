//criação da nossa classe:
class Cliente{
    //definindo os campos da nossa classe:
    nome;
    cpf;
    rg;
    agencia;
    saldo;
}

//criação dos objetos:
const cliente1 = new Cliente();
const cliente2 = new Cliente();

//preenchimento dos campos de cada cliente:
cliente1.nome = "Gabriel";
cliente1.cpf = 12345678998;
cliente1.rg = 12345678;
cliente1.agencia = 1234;
cliente1.saldo = 0;

cliente2.nome = "Joana";
cliente2.cpf = 99988877765;
cliente2.rg = 77744561;
cliente2.agencia = 4321;
cliente2.saldo = 0;

console.log("Os dados dos cleintes são:\n");
console.log(cliente1, "\n"); 
console.log(cliente2 ,"\n");