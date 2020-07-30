function taskHighlighter(task, list) {
  task.addEventListener('click', function() {
    // Removes grey background style from all other tasks
    for (let i = 0; i < list.children.length; i += 1) {
      list.children[i].classList.remove('grey-background');
    }
    // Add grey background style to selected task
    task.classList.add('grey-background');
  });
}

function insertTaskOnList(taskName, list) {
  const task = document.createElement('li');
  task.innerText = taskName;
  taskHighlighter(task, list);
  list.appendChild(task);
}

function clearInput() {
  const elementInputTaskName = document.getElementById('texto-tarefa');
  elementInputTaskName.value = '';
}

function getTaskNameFromInput() {
  const elementInputTaskName = document.getElementById('texto-tarefa');
  const taskName = elementInputTaskName.value;
  return taskName;
}
function getOlElement() {
  const elementOlTaskList = document.getElementById('lista-tarefas');
  return elementOlTaskList;
}

function markTaskAsCompleted(event) {
  event.target.classList.toggle('completed');
}

function clearAll() {
  const list = getOlElement();
  while (list.firstElementChild) {
    list.firstElementChild.remove();
  }
}

function removeCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');
  while (completedTasks.length > 0) {
    completedTasks[0].parentNode.removeChild(completedTasks[0]);
  }
}

function saveTasks() {
  const list = document.getElementById('lista-tarefas');
  localStorage.setItem('savedTasks', list.innerHTML);
}

function restoreTasks() {
  const hasListSaved = localStorage.getItem('savedTasks');
  if (hasListSaved) {
    const olderList = getOlElement();
    olderList.parentNode.removeChild(olderList);
    const taskListContainer = document.getElementById('task-list');
    const newList = document.createElement('ol');
    newList.setAttribute('id', 'lista-tarefas');
    newList.innerHTML = localStorage.getItem('savedTasks');
    taskListContainer.appendChild(newList);
  }
}

function clearSavedList() {
  localStorage.clear();
}

const elementBtnAddTask = document.getElementById('criar-tarefa');
elementBtnAddTask.addEventListener ('click', function() {
  const taskName = getTaskNameFromInput();
  const list = getOlElement();
  insertTaskOnList(taskName, list);
  clearInput();
});

const elementOl = document.getElementById('lista-tarefas');
elementOl.addEventListener('dblclick', markTaskAsCompleted);

const elementClearButton = document.getElementById('apaga-tudo');
elementClearButton.addEventListener('click', clearAll);

const elementRemoveCompletedButton = document.getElementById('remover-finalizados');
elementRemoveCompletedButton.addEventListener('click', removeCompletedTasks);

const elementSaveTasksButton = document.getElementById('salvar-tarefas');
elementSaveTasksButton.addEventListener('click', saveTasks);

const elementclearSavedList = document.getElementById('limpa-lista-gravada');
elementclearSavedList.addEventListener('click', clearSavedList);

window.onload = restoreTasks();
