const Stock = ({data}) => {
  const handleClick = (event) => {
    // console.log("", event.currentTarget)
    console.log(event.currentTarget)
    // if(event.target === event.currentTarget)
    alert('Clicked: '+event.target.id)
  }
  return (
    <ul className="list-group list-group-horizontal">
      {data.map((datum, index) => (
        <Item handleClick={handleClick} id={datum.name} quantity={datum.instock} key={index}/>
      ))}
    </ul>
  );
};
