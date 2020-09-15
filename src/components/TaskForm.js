import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super();
        this.state = {
            id: '',
            name: '',
            status: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
    }

    componentWillMount(){
        if(this.props.task){
            console.log(this.props.task);
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            })
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps && nextProps.task){
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            })
        }else{
            this.setState({
                id: '',
                name: '',
                status: true
            })
        }
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
        this.props.onSubmit(this.state);
        this.setState({
            id: '',
            name: '',
            status: true
        });
    }
    
    onClear(){
        this.setState({
            name: '',
            status: true
        });
    }
    
    render() {
        let {id} = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== '' ? 'Cập nhật công việc' : 'Thêm Công Việc'}
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
                            <button type="submit" className="btn btn-warning">{id !== '' ? 'Cập nhật' : 'Thêm'}</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;