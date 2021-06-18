const Stock = () => {
  return (
    <ul className="list-group list-group-horizontal">
      {data.map((datum) => (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {datum.name} {datum.instock}
        </li>
      ))}
    </ul>
  );
};
