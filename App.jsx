const App = () => {
  const [stock_data, setStockData] = React.useState(data);
  const [cart_data, setCartData] = React.useState([]);
  const updateState=(name, A, updateA, B, updateB) => {
    moveBetween(name, A, updateA, B, updateB);
  };
  return (
    <div>
      <h2>Stock</h2>
      <Stock
        data={stock_data}
        handleClick={(e) =>
          updateState(
            e.target.id,
            stock_data,
            setStockData,
            cart_data,
            setCartData
          )
        }
      />
      <h2>Shopping Cart</h2>
      <ShoppingCart
        data={cart_data}
        handleClick={(e) =>
          updateState(
            e.target.id,
            cart_data,
            setCartData,
            stock_data,
            setStockData
          )
        }
      />
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

function moveBetween(name, A, updateA, B, updateB) {
  let A_item = A.filter((datum) => datum.name === name);
  let tmp_item = A_item[0];
  if (parseInt(tmp_item.quantity) <= 0) return null;
  let tmp_A_data = substractOneItemTo(A, tmp_item);
  let trimmed_A_data = removeItemIfZeroQuantity(tmp_A_data);
  let tmp_B_data = addOneItemTo(B, tmp_item);
  updateA(trimmed_A_data);
  updateB(tmp_B_data);
}
