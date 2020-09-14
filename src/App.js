import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [], //id: unique, name, status
            isDisplayForm : false
        }
        this.onGenerateData = this.onGenerateData.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({tasks : tasks});
        }
    }

    onGenerateData() {
        let tasks = [
            {
                id: this.generateID(),
                name: "Học Lập Trình",
                status: true
            },
            {
                id: this.generateID(),
                name: "Đi chơi",
                status: false
            },
            {
                id: this.generateID(),
                name: "Ngủ",
                status: true
            }
        ];
        this.setState({tasks : tasks}, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks)));
    }

    s4() {
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    toggleForm(){
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }

    closeForm(){
        console.log("test")
        this.setState({
            isDisplayForm : false
        })
    }

    render() { 
        let {tasks, isDisplayForm} = this.state;
        let formElement = isDisplayForm ? <TaskForm closeForm={this.closeForm}/> : '';
        return (            
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {formElement}
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.toggleForm}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <button type="button" className="btn btn-danger" onClick={this.onGenerateData}>
                            Generate Data
                        </button>
                        <Control></Control>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks={tasks}></TaskList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        );
    }
}

export default App;