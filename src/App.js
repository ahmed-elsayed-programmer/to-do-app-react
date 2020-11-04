import React ,{Component} from 'react';
import Todos from './Todos'
import AddTodo from './Addtodo'

class App extends Component {
  state = {
    todos :[
      {id : 1 , content: "play football"},
      {id : 2 , content: "create our project"}
    ]
  }
  deletTodo = (id) => {
    const todos = this.state.todos.filter(todo => {return todo.id !== id ;})
    this.setState({todos})
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos =[...this.state.todos , todo]
    this.setState({
      todos
    })
  }
  render(){
  return (
    <div className="todo-app container">
    <h1 className = "center blue-text">todo's</h1>
    <Todos todos ={this.state.todos} deletTodo = {this.deletTodo}/>
    <AddTodo addTodo={this.addTodo}/>
    </div>
  );
}
}
export default App;
