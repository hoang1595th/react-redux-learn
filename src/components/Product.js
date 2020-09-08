import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/s/6s_rose_2.jpg" alt="iphone 6" />
                        <div className="caption">
                            <h3>Iphone 6 Plus</h3>
                            <p>
                                16.000.000 VND
                        </p>
                        </div>
                        <button type="button" className="btn btn-success">Mua hang</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;