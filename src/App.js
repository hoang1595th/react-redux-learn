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
            isDisplayForm : false,
            taskEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyWord: '',
            sort: {
                by: 'name',
                value: 1
            }
        }
        this.onGenerateData = this.onGenerateData.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.showForm = this.showForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateStatus = this.onUpdateStatus.bind(this);
        this.findIndex = this.findIndex.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onSort = this.onSort.bind(this);
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
        if(this.state.isDisplayForm && this.state.taskEditing !== null){
            this.setState({
                isDisplayForm : true,
                taskEditing: null
            })
        }else{
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditing: null
            })
        }        
    }

    closeForm(){
        this.setState({
            isDisplayForm : false,
            taskEditing: null
        })
    }

    showForm(){
        this.setState({
            isDisplayForm : true
        })
    }

    onSubmit(task){
        let {tasks} = this.state;
        if(task.id === ''){
            task.id = this.generateID();
            tasks.push(task);
        }else{
            let index = this.findIndex(task.id);
            if(index > -1){
                tasks[index].id = task.id;
                tasks[index].name = task.name;
                tasks[index].status = task.status;
            }
        }
        //localStorage.removeItem('tasks');
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.setState({
            tasks: tasks,
            taskEditing: null
        });
    }

    onUpdateStatus(id){
        let index = this.findIndex(id);
        if(index > -1){
            let {tasks} = this.state;
            tasks[index].status = !tasks[index].status;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            this.setState({tasks: tasks});
        }
    }

    findIndex(id){
        let result = -1;
        let {tasks} = this.state;
        tasks.forEach((task, index) => { 
            if(task.id == id){
                result = index;
            }
        });
        return result;
    }

    onDelete(id){
        let index = this.findIndex(id);
        if(index > -1){
            let {tasks} = this.state;
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            this.setState({tasks: tasks});
        }
    }

    onUpdate(id){
        if(!this.state.isDisplayForm){
            this.showForm();
        }
        let index = this.findIndex(id);
        if(index > -1){
            let {tasks} = this.state;
            this.setState({taskEditing: tasks[index]})
        }
    }

    onFilter(filterName, filterStatus){
        console.log(filterName, filterStatus);
        this.setState({
            filter: {
                name: filterName,
                status: filterStatus
            }
        });
    }

    onSearch(key){
        this.setState({
            keyWord: key
        });
    }

    onSort(sortBy, sortValue){
        this.setState({
            sort: {
                by: sortBy,
                value: sortValue
            }
        })
    }

    render() { 
        let {tasks, isDisplayForm, taskEditing, filter, keyWord, sort} = this.state;
        let formElement = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} closeForm={this.closeForm} task={taskEditing}/> : '';
        if(filter.name !== ''){
            tasks = tasks.filter((task) => {
                return (task.name.toLocaleLowerCase().indexOf(filter.name.toLocaleLowerCase()) !== -1);
            });
        }
        if(filter.status !== -1){
            tasks = tasks.filter((task) => {
                return task.status == filter.status;
            });
        }
        if(keyWord !== ''){
            tasks = tasks.filter((task) => {
                return (task.name.toLocaleLowerCase().indexOf(keyWord) !== -1);
            });
        }
        
        if(sort.by === 'name'){
            if(sort.value === 1){
                tasks = tasks.sort();
            }else{
                tasks = tasks.sort().reverse();
            }  
        }
        
        
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
                        <Control onSearch={this.onSearch} keyWord={this.state.keyWord} onSort={this.onSort}></Control>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks={tasks} 
                                    onUpdateStatus={this.onUpdateStatus} 
                                    onDelete={this.onDelete}
                                    onUpdate={this.onUpdate}
                                    onFilter={this.onFilter}
                                ></TaskList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        );
    }
}

export default App;