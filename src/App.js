import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : [
        {
            id: 1,
            name: "Apple Iphone 6 Plus 16GB",
            price: 16000000,
            image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/s/6s_rose_2.jpg",
            status: true
        },
        {
            id: 2,
            name: "Apple Iphone 7 Plus 32GB",
            price: 17000000,
            image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/s/6s_rose_2.jpg",
            status: true
        },
        {
            id: 3,
            name: "Apple Iphone 8 Plus 64GB",
            price: 18000000,
            image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/s/6s_rose_2.jpg",
            status: false
        }
      ],
      isActive:  true
    }
  }
  
  active = (index) => {
    let stateCopy = Object.assign(this.state, {});
    stateCopy.products[index].status = !stateCopy.products[index].status;
    this.setState(stateCopy);
  }

  addProduct = () =>{
    console.log(this.refs.name.val);
  }

  render() {
    let cardProducts = this.state.products.map((product, index) => {
        let result = false;  
        if(product.status){
            result = 
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key = { product.id }>
                <Product
                  price = { product.price }
                  image = { product.image }
                  name = { product.name }
                />
              </div>
        }
        return result;
    });

    let tableRowProducts = this.state.products.map((product, index) => {      
        let result = 
          <tr key={ index }>
            <td>{ product.id }</td>
            <td>{ product.name }</td>
            <td>{ product.price }</td>
            <td>
              <button type="button" className="btn btn-large btn-block btn-primary" onClick={ this.active.bind(this, index) }>{ product.status.toString() }</button>
            </td>
          </tr>
        return result;
    });
  
    return (
      <div className="container">  
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">            
            <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm sản phẩm</h3>
                </div>
                <div className="panel-body">   
                  <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" className="form-control" id="name" ref="name" placeholder="Input field"/>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={ this.addProduct }>Lưu</button>
                </div>
            </div>
          </div>
        </div>        
        <hr></hr>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">            
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th>Kích hoạt</th>
                </tr>
              </thead>
              <tbody>
                { 
                  tableRowProducts 
                }
              </tbody>
            </table>            
          </div>      
        </div>        
        <hr></hr>
        <div className="row">
          {
            cardProducts
          }
        </div>      
    </div>
    );
  }
}

export default App;