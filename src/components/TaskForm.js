import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {
    constructor(props) {
        console.log(props)
        super();
        this.state = {
            id: '',
            name: '',
            status: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount(){

    }

    componentWillReceiveProps(nextProps){
        //console.log(this.props.taskEditing)
        this.setState(nextProps.taskEditing);
    }
    
    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        
        if(name === 'status'){
            value = value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit(event){
        event.preventDefault();
        if(this.props.taskEditing.id !== ''){
            this.props.onUpdateTask(this.state);
        }else{
            this.props.onAddTask(this.state);
        }
        this.props.onOpenTaskToCreate();
    }    
      
    render() {
        let task = this.state;
        if(this.props.isDisplayForm){
            return (
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                {task.id !== '' ? 'Cập nhật công việc' : 'Thêm Công Việc'}
                                <button className="btn btn-primary" type="button" onClick={() => this.props.closeForm()}>
                                    <span className="fa fa-times-circle text-right"></span>
                                </button>
                            </h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Tên :</label>
                                    <input type="text" required="required" className="form-control" value={this.state.name} name="name" onChange={this.handleChange}/>
                                </div>
                                <label>Trạng Thái :</label>
                                <select className="form-control" required="required" value={this.state.status} name="status" onChange={this.handleChange}>
                                    <option value={true} >Kích Hoạt</option>
                                    <option value={false} >Ẩn</option>
                                </select>
                                <br/>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-warning">{task.id !== '' ? 'Cập nhật' : 'Thêm'}</button>&nbsp;
                                    <button type="button" className="btn btn-danger" onClick={this.props.onOpenTaskToCreate}>Hủy Bỏ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }else{
            return '';
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state.taskEditing)
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditing: state.taskEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task));
        },
        closeForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenTaskToCreate: () => {
            dispatch(actions.onOpenTaskToCreate());
        },
        onUpdateTask: (task) => {
            dispatch(actions.onUpdateTask(task));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);