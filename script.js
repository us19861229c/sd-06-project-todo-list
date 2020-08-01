//  Criando as variaveis do html
const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const itemlistaTarefas = document.getElementById('lista-tarefas');
//  Função para quando digitar uma tarefa ela ser adciona a lista clicando no botão indicado
function listarItens() {
  const itemLista = document.createElement('li');
  itemLista.innerHTML = textoTarefa.value;
  itemlistaTarefas.appendChild(itemLista);
  itemLista.className = 'tarefa';
  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', listarItens);

// Ao clicar em um item da lista, altere a cor de fundo para cinza ao clicar em outro mude
// function alterarCorDoItemParaCinza(event) {
//   const selecionaItemLista = event.target;
//   selecionaItemLista.style.backgroundColor = 'rgb(128 , 128 , 128)';
// }

// itemlistaTarefas.addEventListener('click', alterarCorDoItemParaCinza);

//  Ao clicar no item da lista, altere a cor para cinza e quando clicar em outro substituir
itemlistaTarefas.addEventListener('click', function (event) {
  const removeClass = document.querySelector('.selected');
  if (removeClass !== null) {
    removeClass.classList.remove('selected');
  }
  const selectClass = event.target;
  selectClass.className += ' selected';
});
