import React, { Component } from 'react';

class CreateProduct extends Component {
    constructor(props) {
        super();
        this.state = {
            id: 0,
            name: "",
            price: 0,
            image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/s/6s_rose_2.jpg",
            status: true
        };

        this.addProduct = this.addProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    addProduct(event){
        event.preventDefault();
        event.target.reset();
        this.props.addProduct([this.state]);
    }

    handleChange(event) {
        let name = event.target.name;        
        let value = event.target.value;
        //console.log(value);
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">            
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3 className="panel-title">Thêm sản phẩm</h3>
                        </div>
                        <div className="panel-body">   
                        <form onSubmit={ this.addProduct } role="form">                        
                            <div className="form-group">
                                <label>Tên sản phẩm</label>
                                <input type="text" className="form-control" name="name" onChange={ this.handleChange } placeholder="ten san pham"/>
                            </div>
                            <div className="form-group">
                                <label>Giá</label>
                                <input type="text" className="form-control" name="price" onChange={ this.handleChange } placeholder="gia"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu</button>
                        </form>                        
                        </div>                            
                    </div>
                </div>
            </div>        
        
        );
    }
}

export default CreateProduct;