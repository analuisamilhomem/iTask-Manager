class Tarefa{
    nome: string;
    descricao: string;
    concluida: boolean;
    dataDeCriacao: Date;

    constructor (nomeRecebido: string, descricaoRecebida: string){
    this.nome = nomeRecebido
    this.descricao = descricaoRecebida 
    this.concluida = false;
    this.dataDeCriacao = new Date ();
    }

    renderizar() {
        const li = document.createElement ('li');
        li.innerHTML = `
            <strong> ${this.nome} </strong>
            `;
    return li;
    }

 }

 const botao = document.getElementById('adicionar-botao') as HTMLButtonElement;
 const inputNome = document.getElementById('input-nome') as HTMLInputElement; 
 const nomeTarefa = inputNome.value;
 const inputDescricao = document.getElementById('input-descricao') as HTMLInputElement; 
 const descricaoTarefa = inputDescricao.value;

 botao.addEventListener ('click', () => {
    const novaTarefa = new Tarefa (inputNome.value, inputDescricao.value);
    document.getElementById('lista')?. appendChild(novaTarefa.renderizar ())
 })
 