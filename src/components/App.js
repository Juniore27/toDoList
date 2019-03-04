import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 7
  state = {
    tasks: [
      {
        id: 0,
        text: "zadania i zadania wciąż tylko zadania zadania do zrobienia",
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "tylko zadania zadania do zrobienia",
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "suszyć kruszyć zmielić zważyć",
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "potem zalać i zaparzyć",
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "poznać tajna recepturę starego druida",
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "ogolić torbę razem z kulami",
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: "zadania i zadania wciąż tylko zadania zadania do zrobienia",
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      }
    ]
  }
  deleteTask = (id) => {

    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)


    this.setState({
      tasks
    })

    // let tasks = [...this.state.tasks]
    // console.log(tasks)
    // tasks = tasks.filter(task => task.id !== id)
    // console.log(tasks)
    // this.setState({
    //   tasks
    // })

  }

  changeTaskStaus = (id) => {
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })


  }
  AddTask = (text, important, date) => {

    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++
    this.setState(prevState => ({

      tasks: [...prevState.tasks, task]
    }))
    console.log(this.state.tasks);

    return true
  }
  render() {
    return (
      <div className="App">
        TOODOAPP
        <AddTask add={this.AddTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStaus} />

      </div>
    );
  }
}

export default App;
