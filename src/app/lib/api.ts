
// Interfaz para definir una tarea
export interface Task {
    id: number;
    title: string;
    description: string;
  }
  export async function fetchTasks(): Promise<Task[]> {
    const response = await fetch('http://localhost:3001/api/tasks');
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
  }
  
  export async function createTask(task: Omit<Task, 'id'>): Promise<Task> {
    const response = await fetch('http://localhost:3001/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to create task');
    return response.json();
  }
