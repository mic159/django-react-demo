import React from 'react'

const Product = ({title, subtitle, price}) => (
    <div className="well well-sm">
        <strong>{title}</strong>
        <span style={{float:'right'}}>${price.toFixed(2)}</span>
        <br/>
        <span>{subtitle}</span>
    </div>
)

class ProductList extends React.Component {
    render() {
        return (
            <div>
                {this.props.products.map((p, idx) => <Product key={idx} {...p} />)}
            </div>
        )
    }
}

export default ProductList
