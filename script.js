const insert = document.querySelector('#criar-tarefa')
const remove = document.querySelector('#remover-finalizados')
const clear = document.querySelector('#apaga-tudo')

function addItemList(){
    if (document.querySelector('#texto-tarefa').value !== "") {
    let newItem = document.createElement('li')
    newItem.innerHTML = document.querySelector('#texto-tarefa').value
    document.querySelector('#lista-tarefas').appendChild(newItem)
    document.querySelector('#texto-tarefa').value = ''    
    }else{
        console.log("vazio")
    }
}

function handleSelectedItem(event) {
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    } else {
      event.target.classList.add('selected');
    }
  }
  