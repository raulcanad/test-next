// components/TaskList.tsx
import React from 'react';
import { Task } from '../lib/api';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}: {task.description}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
