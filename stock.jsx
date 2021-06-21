const Stock = ({data, handleClick}) => {
  return (
    <ul className="list-group list-group-horizontal">
      {data.map((datum, index) => (
        <Item handleClick={handleClick} id={datum.name} quantity={datum.quantity} key={index}/>
      ))}
    </ul>
  );
};
