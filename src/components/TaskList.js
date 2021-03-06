import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskList extends Component {
    constructor(props) {
        super();
        this.state = {
            filterName: '',
            filterStatus: -1// -1 all, 1 active, 0 inactive
        }
        this.onChange = this.onChange.bind(this);
    }
    

    onChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        }, () => this.props.onFilter(this.state.filterName, parseInt(this.state.filterStatus)));
    }

    render() {
        let {filterName, filterStatus} = this.state;
        let {tasks} = this.props;
        let listItemElements = tasks.map((task, index) => {
            return <TaskItem 
                        task={task} key={index} index={index} 
                        onUpdateStatus={this.props.onUpdateStatus}
                        onDelete={this.props.onDelete}
                    ></TaskItem>
        });
        
        return (
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange}/>
                        </td>
                        <td>
                            <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {listItemElements}                    
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (taskId) => {
            dispatch(actions.onUpdateStatus(taskId));
        },
        onDelete: (taskId) => {
            dispatch(actions.onDeleteTask(taskId));
            dispatch(actions.closeForm());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);