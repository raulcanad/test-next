import React, { useState } from "react";
import styles from '../components/estilo/TaskList2.css'; // Importa los estilos como un módulo

const TaskList2 = () => {
  const [task, setTask] = useState(""); // Almacenar el texto de la nueva tarea
  const [tasks, setTasks] = useState([]); // Almacenar la lista de tareas

  // Función para agregar una tarea
  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(""); // Limpiar el campo de texto después de agregar la tarea
    }
  };

  // Función para marcar la tarea como completada
  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Función para eliminar una tarea
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className={styles['task-list-container']}>
      <h1>Lista de Tareas</h1>
      
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button onClick={addTask}>Agregar Tarea</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? styles.completed : ""}>
            <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList2;
