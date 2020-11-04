import React ,{Component} from 'react'

class AddTodo extends Component {
    state ={
        content: ''
    }
    ChangeHandel = (e) => {
        this.setState({
            content : e.target.value
        })
    }
    SubmitHandel = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.SubmitHandel}>
                    <label>Add new todo :</label>
                    <input type='text' onChange={this.ChangeHandel} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo 