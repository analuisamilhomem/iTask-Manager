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
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = this.concluida;
        const nomeElemento = document.createElement('strong');
        nomeElemento.textContent = this.nome;
        nomeElemento.classList.add('nome-tarefa');
        const descricaoElemento = document.createElement('span');
        descricaoElemento.textContent = this.descricao;
        descricaoElemento.classList.add('descricao-tarefa');
        const dataElemento = document.createElement('span');
        dataElemento.textContent = this.dataDeCriacao.toLocaleDateString('pt-BR');
        dataElemento.classList.add('data-tarefa');
        const visual = () => {
            nomeElemento.classList.toggle('concluida', this.concluida);
        };
        visual();
        checkbox.addEventListener('change', () => {
            this.concluida = checkbox.checked;
            visual();
        });
        li.appendChild(checkbox);
        li.appendChild(nomeElemento);
        li.appendChild(descricaoElemento);
        li.appendChild(dataElemento);
        return li;
    }
}
const botaoAdicionar = document.getElementById('botao-adicionar-tarefa');
const botaoConcluir = document.getElementById('botao-concluir-tarefa');
const inputNome = document.getElementById('input-nome');
const nomeTarefa = inputNome.value;
const inputDescricao = document.getElementById('input-descricao');
const descricaoTarefa = inputDescricao.value;
const adiconarTarefas = document.getElementById('formulario');
botaoAdicionar.addEventListener('click', () => {
    adiconarTarefas.classList.toggle('escondido');
});
botaoConcluir.addEventListener('click', () => {
    const novaTarefa = new Tarefa(inputNome.value, inputDescricao.value);
    document.getElementById('lista')?.appendChild(novaTarefa.renderizar());
});
