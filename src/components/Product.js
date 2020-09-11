import React, { Component } from 'react';

class Product extends Component {  
    addToCard = () => {
        console.log(this.props.price);
    }

    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img src={ this.props.image } alt="iphone 6" />
                        <div className="caption">
                            <h3>{ this.props.name }</h3>
                            <p>
                                { this.props.price }
                            </p>
                        </div>
                        <button type="button" className="btn btn-success" onClick={this.addToCard}>Mua hang</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;