const App = () => {
    const [stock_data, setStockData] = React.useState(data);
    const [cart_data, setCartData] = React.useState([]);
    const addItemToCart = (name, A, B) => {
        let trimmed_A_data, tmp_B_data 
        [trimmed_A_data, tmp_B_data]= moveBetween(name,A,B)
        setStockData(trimmed_A_data);
        setCartData(tmp_B_data);
    };
    const returnItemToStock = (name, A, B) => {
        let trimmed_A_data, tmp_B_data 
        [trimmed_A_data, tmp_B_data]= moveBetween(name,A,B)
        setStockData(tmp_B_data);
        setCartData(trimmed_A_data);
    };

    return (
        <div>
            <h2>Stock</h2>
            <Stock data={stock_data} handleClick={e=>addItemToCart(e.target.id,stock_data,cart_data)} />
            <h2>Shopping Cart</h2>
            <ShoppingCart data={cart_data} handleClick={e=>returnItemToStock(e.target.id, cart_data, stock_data)} />
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

function moveBetween(name,A,B){
    let A_item = A.filter(
        (datum) => datum.name === name
    );
    let tmp_item = A_item[0];
    if (parseInt(tmp_item.quantity) <= 0) return null;
    let tmp_A_data = substractOneItemTo(A, tmp_item);
    let trimmed_A_data = removeItemIfZeroQuantity(tmp_A_data);
    let tmp_B_data = addOneItemTo(B, tmp_item);
    return [trimmed_A_data, tmp_B_data]
}