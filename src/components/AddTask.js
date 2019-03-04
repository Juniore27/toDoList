import React, { Component } from 'react';
import './AddTask.css'


class AddTask extends Component {
 minDate = new Date().toISOString().slice(0, 10)
 state = {
  text: '',
  checked: false,
  date: this.minDate
 }
 handelDate = (e) => {
  this.setState({
   date: e.target.value
  })
 }
 handelText = (e) => {
  this.setState({
   text: e.target.value
  })
 }

 handelCheck = (e) => {
  this.setState({
   checked: e.target.checked
  })
 }

 handelClick = () => {
  const { text, checked, date } = this.state
  if (text.length > 2) {
   const add = this.props.add(text, checked, date)

   if (add) {

    this.setState({
     text: '',
     checked: false,
     date: this.minDate
    })
   }
  }
  else {
   console.log('za mało znaków');


  }
 }

 render() {
  let maxDate = this.minDate.slice(0, 4) * 1 + 1;
  maxDate = maxDate + "-12-31"

  return (


   <div className="form">
    <input type="text" value={this.state.text} placeholder="dodaj zadanie" onChange={this.handelText} />
    <label htmlFor="box">
     <input type="checkbox" id="box" checked={this.state.checked} onChange={this.handelCheck} /> Priorytet
    </label>
    <br />
    <label htmlFor="date"> Do kiedy zrobić
    <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handelDate} />

    </label>
    <br />
    <button onClick={this.handelClick}>Dodaj</button>

   </div>
  );
 }
}

export default AddTask;

