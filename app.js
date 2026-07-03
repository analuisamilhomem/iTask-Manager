"use strict";
class Tarefa {
    nome;
    descricao;
    concluida;
    dataDeCriacao;
    constructor(nomeRecebido, descricaoRecebida) {
        this.nome = nomeRecebido;
        this.descricao = descricaoRecebida;
        this.concluida = false;
        this.dataDeCriacao = new Date();
    }
    renderizar() {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong> ${this.nome} </strong>
            `;
        return li;
    }
}
const botao = document.getElementById('adicionar-botao');
const inputNome = document.getElementById('input-nome');
const nomeTarefa = inputNome.value;
const inputDescricao = document.getElementById('input-descricao');
const descricaoTarefa = inputDescricao.value;
botao.addEventListener('click', () => {
    const novaTarefa = new Tarefa(inputNome.value, inputDescricao.value);
    document.getElementById('lista')?.appendChild(novaTarefa.renderizar());
});
