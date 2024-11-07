
import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, Task } from '../lib/api';

const TaskManager: React.FC = () => {
  // Definimos los estados con tipos explícitos
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    // Traemos las tareas al cargar el componente
    fetchTasks()
      .then(setTasks)
      .catch(console.error);
  }, []);

  // Definimos el tipo del evento de submit
  const handleAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = { title, description };

    try {
      // Creamos una nueva tarea
      const addedTask = await createTask(newTask);
      setTasks([...tasks, addedTask]);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Task List</h1>

      {/* TaskList */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}: {task.description}
          </li>
        ))}
      </ul>

      {/* TaskForm */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

    </div>
  );
};



export default TaskManager;
