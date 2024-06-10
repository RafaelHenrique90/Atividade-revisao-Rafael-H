/* Rafael Henrique Braga de Morais */

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('newTaskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Carregar tarefas do Local Storage
    loadTasks();

    // Adicionar tarefa
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Função para adicionar tarefa
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-task">✔</button>
                <button class="delete-task">✖</button>
            </div>
        `;
        taskList.appendChild(taskItem);

        saveTasks();

        // Marcar tarefa como concluída
        taskItem.querySelector('.complete-task').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            saveTasks();
        });

        // Remover tarefa
        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            taskItem.remove();
            saveTasks();
        });
    }

    // Função para salvar tarefas no Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('.task-item').forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector('span').textContent,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Função para carregar tarefas do Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTask(task.text);
            if (task.completed) {
                const taskItems = taskList.querySelectorAll('.task-item');
                const lastTaskItem = taskItems[taskItems.length - 1];
                lastTaskItem.classList.add('completed');
            }
        });
    }
});
