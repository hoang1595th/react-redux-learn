import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import './App.css';

class App extends Component {
  render() {
    var products = [
        {
            id: 1,
            name: "Apple Iphone 6 Plus 16GB",
            price: 15000000,
            image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/s/6s_rose_2.jpg",
            status: true
        },
        {
            id: 2,
            name: "Apple Iphone 6 Plus 16GB",
            price: 16000000,
            image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/s/6s_rose_2.jpg",
            status: true
        },
        {
            id: 3,
            name: "Apple Iphone 6 Plus 16GB",
            price: 17000000,
            image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/s/6s_rose_2.jpg",
            status: false
        }
    ];
  
    let elements = products.map((product, index) => {
        let result = "";
  
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
  
    return (
      <div>      
        <div className="row">
          {
            elements
          }
        </div>      
    </div>
    );
  }
}

export default App;