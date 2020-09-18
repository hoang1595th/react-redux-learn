import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskItem extends Component {
    render() {
        let {task, index} = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <button className={task.status ? 'btn btn-success' : 'btn btn-danger'} onClick={() => this.props.onUpdateStatus(task.id)}>
                    <span className="label">{task.status ? 'Kích Hoạt' :  'Ẩn'}</span>
                    </button>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={() => this.props.onOpenTaskToUpdate(task)}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => this.props.onDelete(task.id)}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onOpenTaskToUpdate: (task) => {       
            dispatch(actions.openForm());
            dispatch(actions.onOpenTaskToUpdate(task));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);