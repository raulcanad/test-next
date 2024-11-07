"use client";
import Contador from './components/Contador';
// import TaskList2 from './components/TaskList2';
import TaskManager from './components/TaskApp';
import ApiCall from '../app/components/ApiCall'

export default function Home() {
 
  return (
    <div>
     {/* <TaskList2></TaskList2> */}
     {/* <TaskManager className="para el css" /> */}
      <TaskManager />
      <Contador/>
      <ApiCall/>
      
    </div>
  );
}
