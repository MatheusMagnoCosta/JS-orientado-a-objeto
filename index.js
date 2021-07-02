import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Matheus";
cliente1.cpf = "11122233309";

const contaCorrenteMatheus = new ContaCorrente();

contaCorrenteMatheus.agencia = "1001";


contaCorrenteMatheus.depositar(200);
const valorSacado = contaCorrenteMatheus.sacar(50);


console.log(valorSacado);
console.log(contaCorrenteMatheus);