var React = require('react');

var Product = React.createClass({
    render: function() {
        return (
            <div className="well well-sm">
                <strong>{this.props.title}</strong>
                <span style={{float:'right'}}>${this.props.price.toFixed(2)}</span>
                <br/>
                <span>{this.props.subtitle}</span>
            </div>
        );
    }
});

var ProductList = React.createClass({
    componentDidMount: function() {
        console.log("Mounted!");
    },
    render: function() {
        var list = this.props.products.map(function (product) {
            return React.createElement(Product, product, null);
        });
        return (
            <div>
                {list}
            </div>
        );
    }
});

module.exports = ProductList;