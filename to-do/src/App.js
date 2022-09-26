import './App.css';
import React from 'react';
import Input from './Input';
import Button from './Button';
import ToDoList from './ToDoList';
import Header from './Header';
class TodoList extends React.Component {

constructor (props){
  super(props);
   this.state={
    list:[],
    value:"",
   } 
  
}

addItem = (event) => {
  this.setState({
      list:[...this.state.list, this.state.value],
      value:""
  })

}

handleChange =(event) => {
  this.setState({value: event.target.value})
}

  render() {
    return (
      <div className="App">
        <Header />
        <Input value={this.state.value} handleChange={this.handleChange} />
        <Button addItem={this.addItem}/>
        <ToDoList list={this.state.list} />
      </div>
    )
    
  
  }
}


export default TodoList;
