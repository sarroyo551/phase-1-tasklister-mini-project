document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('create-task-form');
    const tasks = document.getElementById('tasks')
    const taskDescription = document.getElementById('new-task-description')
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const task = document.createElement('li')
        task.textContent = taskDescription.value
        tasks.appendChild(task)

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'x'
        task.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
          task.remove()
        } )

        taskDescription.value = ''
    }   )
});
