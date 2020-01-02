import React from 'react';
import './MyList.css';
import { FontAwesomeIcon }
 from '@fortawesome/react-fontawesome';


const MyList = (props) =>
{
const items=props.items;
const listItems = items.map(item=>
{
  return <div className="list" key={item.key}>
  <p>
  <input type="text" onChange={ (e) =>{ props.setUpdate(e.target.value,item.key)}} id={item.key} value={item.text} />
  <span>
  <FontAwesomeIcon className="ficon" icon="trash" onClick={ () => props.deleteItem(item.key)} />
  </span>
  </p>
  
  </div>
})


return(
 
<div>{listItems}</div>

)
}

export default MyList;