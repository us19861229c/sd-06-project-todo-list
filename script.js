function addLista () {
    var textoTarefa = document.getElementById('texto-tarefa').value;
    let list = document.getElementById('lista-tarefas')
    let li = document.createElement('li');
    li.innerHTML = textoTarefa;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';

}



let criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', addLista);


