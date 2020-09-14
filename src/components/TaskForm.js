import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            status: true
        }
    }
    
    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm Công Việc
                        <button className="btn btn-primary" type="button" onClick={() => this.props.closeForm()}>
                            <span className="fa fa-times-circle text-right"></span>
                        </button>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" value={this.state.name} name="name" onChange={this.handleChange}/>
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required" value={this.state.status} name="status" onChange={this.handleChange}>
                            <option value="1" selected={this.state.status === true}>Kích Hoạt</option>
                            <option value="0" selected={this.state.status === false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                            <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;