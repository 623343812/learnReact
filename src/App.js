//创建 “外壳” 组件App
//react多种暴露的形式   React,{Component}
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

//创建并暴露App组件
export default class App extends Component {
    state = {
        todos:[
            {id:'01',name:'吃饭',done:false},
            {id:'02',name:'睡觉',done:true},
            {id:'03',name:'写代码',done:false}
        ]
    }
    addTodo = (todoObj) => {
        const {todos} = this.state

        const newTodos = [todoObj,...todos]

        this.setState({todos:newTodos})
    }
    updateTodo=(id,done) => {
        const {todos} = this.state
        const newTodos = todos.map(todoObj =>{
            if(todoObj.id === id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    } 
    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }
    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map(todoObj => {
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    clearDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}/>
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone}/>
                    </div>
                </div>
            </div>
        )
    } 
}
