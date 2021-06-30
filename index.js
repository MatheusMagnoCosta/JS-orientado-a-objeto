class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo = 0;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }

    }
}

const cliente1 = new Cliente();

cliente1.nome = "Matheus";
cliente1.cpf = "11122233309";

const contaCorrenteMatheus = new ContaCorrente();

contaCorrenteMatheus.agencia = "1001";


contaCorrenteMatheus.depositar(100);
contaCorrenteMatheus.sacar(50);

console.log(contaCorrenteMatheus);