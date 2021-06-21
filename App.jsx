const App = () => {
    const [stock_data, setStockData] = React.useState(data);
    const [cart_data, setCartData] = React.useState([]);
    const addItemToCart = (event) => {
        let stock_item = stock_data.filter(
            (datum) => datum.name === event.target.id
        );
        let tmp_item = stock_item[0];
        if (parseInt(tmp_item.quantity) <= 0) return;
        let tmp_stock_data = substractOneItemTo(stock_data, tmp_item);
        let trimmed_stock_data = removeItemIfZeroQuantity(tmp_stock_data);
        let tmp_cart_data = addOneItemTo(cart_data, tmp_item);
        setStockData(trimmed_stock_data);
        setCartData(tmp_cart_data);
    };
    const returnItemToStock = (event) => {
        let cart_item = cart_data.filter(
            (datum) => datum.name === event.target.id
        );
        let tmp_item = cart_item[0];
        if (parseInt(tmp_item.quantity) <= 0) return;
        let tmp_cart_data = substractOneItemTo(cart_data, tmp_item);
        let trimmed_cart_data = removeItemIfZeroQuantity(tmp_cart_data);
        let tmp_stock_data = addOneItemTo(stock_data, tmp_item);
        setStockData(tmp_stock_data);
        setCartData(trimmed_cart_data);
    };

    return (
        <div>
            <h2>Stock</h2>
            <Stock data={stock_data} handleClick={addItemToCart} />
            <h2>Shopping Cart</h2>
            <ShoppingCart data={cart_data} handleClick={returnItemToStock} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

function addOneItemTo(data, item) {
    let tmp_item = { ...item };
    tmp_item.quantity = 1;
    let a = data.filter((datum) => datum.name === item.name);
    if (a.length === 0) {
        return [...data, tmp_item];
    }
    let tmp_data = data.map((datum) => {
        if (datum.name === tmp_item.name) {
            let tmp_ = { ...datum };
            tmp_.quantity++;
            return tmp_;
        } else {
            return datum;
        }
    });

    return tmp_data;
}
function substractOneItemTo(data, item) {
    return data.map((datum) => {
        if (datum.name === item.name) {
            let tmp = { ...datum };
            tmp.quantity--;
            return tmp;
        } else {
            return datum;
        }
    });
}
function removeItemIfZeroQuantity(data) {
    return data.filter((datum) => datum.quantity > 0);
}
