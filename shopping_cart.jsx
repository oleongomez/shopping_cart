const ShoppingCart = ({ data, handleClick }) => {
    console.log(data)
  if (data === null || data.length !== 0) {
    return (
      <ul className="list-group list-group-horizontal">
        {data.map((datum, index) => (
          <Item
            handleClick={handleClick}
            id={datum.name}
            quantity={datum.quantity}
            key={index}
          />
        ))}
      </ul>
    );
  } else {
    return (
      <>
        <h4>Shopping cart is empty</h4>
        <ul className="list-group list-group-horizontal"></ul>
      </>
    );
  }
};
