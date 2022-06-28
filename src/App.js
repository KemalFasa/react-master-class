import React from 'react'
import FormInput from './components/FormInput';
import ToDoItem from './components/ToDoItem';
import logo from './logo.svg';
import './App.css';
import EditModal from './components/EditModal';

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
    ],
    isEdit:false,
    editData : {
      id:"",
      title:""
    }

  }
update = ()  => {
  const { id, title } = this.state.editData
  const newData = {id, title}
  const newTodos = this.state.todos
  newTodos.splice((id-1),newData)
this.setState({
  todos:newTodos,
  isEdit:false,
  editData:
  {
    id:"",
    title:""
  }
})
}
  setTitle = e => {
    this.setState({
      editData:{
        ...this.state.editData,
        title: e.target.value
      }
    })
  }

  openModal = (id, data) => {
    this.setState({
      isEdit:true,
      editData :{
        id,
        title :data
      }
    })
  }
  closeModal = () => {
    this.setState({
      isEdit:false
    })
  }
  deleteTask =id =>{
    //console.log('ok')
    this.setState({
      todos: this.state.todos.filter(item => item.id != id)
    })
    
  
  }
  addTask = data => {
      const id = this.state.todos.length
    const newData = {
      id: id + 1,
    title : data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })

  }
  editTask =id =>{
    console.log("edit Ok")
  }
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
              <ToDoItem 
              key={item.id} 
              todo={item} 
              del={this.deleteTask}
              //close={this.closeModal}
              open={this.openModal}/>
              )}
            

          </div>
          <div className='input-form'>
            <FormInput add={this.addTask}/>
            
          </div>
          <EditModal edit={this.state.isEdit} 
          close={this.closeModal} 
          change={this.setTitle}
          data={this.state.editData}
update={this.update}>
          </EditModal>
    </div>
  );
}
}
export default App;

