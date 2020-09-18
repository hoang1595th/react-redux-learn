import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import * as actions from './actions/index';

import './App.css';
import { connect } from 'react-redux';

class App extends Component {
    constructor() {
        super();
        this.state = {
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
        this.findIndex = this.findIndex.bind(this);
        this.openAddTaskForm = this.openAddTaskForm.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onSort = this.onSort.bind(this);
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

    // toggleForm(){
    //     if(this.state.isDisplayForm && this.state.taskEditing !== null){
    //         this.setState({
    //             isDisplayForm : true,
    //             taskEditing: null
    //         })
    //     }else{
    //         this.setState({
    //             isDisplayForm : !this.state.isDisplayForm,
    //             taskEditing: null
    //         })
    //     }        
    // }

    // closeForm(){
    //     this.setState({
    //         isDisplayForm : false,
    //         taskEditing: null
    //     })
    // }

    // showForm(){
    //     this.setState({
    //         isDisplayForm : true
    //     })
    // } 

    s4 = () => {
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
    }
    
    generateID = () => {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
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

    openAddTaskForm(id){
        this.props.showForm();
        this.props.onOpenTaskToCreate()
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
        let {filter, keyWord, sort} = this.state;
        let {isDisplayForm} = this.props;
        // if(filter.name !== ''){
        //     tasks = tasks.filter((task) => {
        //         return (task.name.toLocaleLowerCase().indexOf(filter.name.toLocaleLowerCase()) !== -1);
        //     });
        // }
        // if(filter.status !== -1){
        //     tasks = tasks.filter((task) => {
        //         return task.status == filter.status;
        //     });
        // }
        // if(keyWord !== ''){
        //     tasks = tasks.filter((task) => {
        //         return (task.name.toLocaleLowerCase().indexOf(keyWord) !== -1);
        //     });
        // }
        
        // if(sort.by === 'name'){
        //     if(sort.value === 1){
        //         tasks = tasks.sort();
        //     }else{
        //         tasks = tasks.sort().reverse();
        //     }  
        // }
        
        
        return (            
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">                    
                    <TaskForm />                    
                    <div className={this.props.isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.openAddTaskForm}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <button type="button" className="btn btn-danger" onClick={this.onGenerateData}>
                            Generate Data
                        </button>
                        <Control onSearch={this.onSearch} keyWord={this.state.keyWord} onSort={this.onSort}></Control>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList
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

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onOpenTaskToCreate: () => {
            dispatch(actions.onOpenTaskToCreate());
        },
        showForm: () => {
            dispatch(actions.openForm());
        },
        closeForm: () => {
            dispatch(actions.closeForm());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);