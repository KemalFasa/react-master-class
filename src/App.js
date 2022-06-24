import React from 'react'
import FormInput from './components/FormInput';
import ToDoItem from './components/ToDoItem';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title : "reading a book"
      },
      {
        id: 2,
        title : "workout training"
      },
      {
        id: 3,
        title : "reading a book"
      }
    ]
  }
  deleteTask =id =>(
    console.log("delete Ok")
  )
  render(){
    const { todos } = this.state;
  return (
    <div className="app">
          <div className="logo">
              <img src={logo} alt="logo" />
              <h3>Task List</h3>
          </div>
          <div className='list'>
            {todos.map(item =>
              <ToDoItem key={item.id} todo={item}/>
              )}
            

          </div>
          <div className='input-form'>
            <FormInput/>
            
          </div>
    </div>
  );
}
}
export default App;

