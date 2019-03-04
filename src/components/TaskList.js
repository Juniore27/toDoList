import React from 'react';
import Task from './Task'

const TaskList = (props) => {
 // const tasks = props.tasks.map(task => <Task
 //  key={task.id}
 //  task={task}
 //  delete={props.delete}
 //  change={props.change}
 // />

 const active = props.tasks.filter(task => task.active)
 const done = props.tasks.filter(task => !task.active)

 const activeElement = active.map(task => <Task key={task.id}
  task={task}
  delete={props.delete}
  change={props.change} />)

 const doneElement = done.map(task => <Task key={task.id}
  task={task}
  delete={props.delete}
  change={props.change} />)



 return (
  <>
   <div className="active">
    <h1>Zadania do zrobienia</h1>
    {activeElement.length ? activeElement : "Nie masz nic do roboty"}
   </div>
   <hr />
   <div className="done">
    <h3>Zadania zrobione({doneElement.length})</h3>
    {doneElement.length >= 5 ? <span style={{ fontSize: 10 }}>Wyświetlonych jest jedynie 5 elemnentów</span> : null}{doneElement.slice(0, 5)}
   </div>
  </>
 );
}

export default TaskList;