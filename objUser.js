class Pessoa {
    #nome;
    #email;
    #cpf;
    #senha;
    #rua;
    #cep;
    #numero;
    #cep;
    #numero;
    #bairro;
    #cidade;

    constructor(nome, email, cpf, senha, rua, cep, numero, bairro, cidade) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
        this.#rua = rua;
        this.#cep = cep;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#email = email;
    }

    verDados() {
        return this.#nome;
    }

    get senha() {
        return this.#senha;
    }

    get email() {
        return this.#email;
    }

    get cpf() {
        return this.#cpf;
    }

    get nome() {
        return this.#nome;
    }

    get cep() {
        return this.#cep;
    }

    get endereco() {
        return this.#rua + ' ' + this.#numero + ", " + this.#bairro + ", " + this.#cidade;
    }
}