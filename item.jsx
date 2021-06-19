const Item = ({handleClick, id, quantity, index}) => {
    return <><li onClick={handleClick} key ={index} id={id} className="list-group-item d-flex justify-content-between align-items-start bg-primary text-white">
    {id} 
    <span onClick={(e)=>{e.stopPropagation()}} className="badge bg-secondary text-white ">{quantity}</span>
  </li>
  </>
}