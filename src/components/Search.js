import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super();
        this.state = {
            keyWord: props.keyWord
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." name="keyWord" onChange={this.onChange}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={() => this.props.onSearch(this.state.keyWord)}>
                        <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                </span>
            </div>
        );
    }
}

export default Search;