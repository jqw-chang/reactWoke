import React, {Component} from 'react'
import {render} from 'react-dom'
import Add from './Add.jsx'
import Tasks from './Tasks.jsx'
class App extends Component{
    constructor(){
        super()
        this.addTask = this.addTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.remove = this.remove.bind(this)
        
        this.state = {
            todos : [],
            value : ""
        }
    }

    handleChange(event){
        this.setState({value:event.target.value})
    }

    addTask(){
        this.setState({
           todos :  this.state.todos.concat(this.state.value)
        })
    }

    remove(i){
        this.setState({
            todos: [
                ...this.state.todos.slice(0,i),
            ...this.state.todos.slice(i+1)
            ]
        })


    }

    render(){
        return (
            [<Add handleChange = {this.handleChange} addTask = {this.addTask}/>,
            <Tasks arr = {this.state.todos} remove = {this.remove}/>]
        )
    }
}

render(
    <App/>,
    document.getElementById("root")
)