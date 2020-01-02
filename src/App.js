import React, { Component } from 'react';
import './App.css';
import MyList from './MyList';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {

  constructor(props)
  {
    super();
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:'',
      },
    };
  }

handleItem = (e) =>
{
  this.setState({
    currentItem:{
      text:e.target.value,
      key:Date.now()
      }
  });
}

handleSubmit = (e) =>
{
  e.preventDefault();
  const newItem= this.state.currentItem;
  console.log(newItem);
  if(newItem.text!=="")
  {
    const newItems=[...this.state.items,newItem];
    this.setState({
      items: newItems,
      currentItem:{
        text:'',
        key:''
      },
    });
  }

}

deleteItem = (key) =>
{
  const filterItem = this.state.items.filter(item =>
      item.key!==key);
  this.setState({items: filterItem});
}

setUpdate = (text,key) =>
{
const  items= this.state.items;
items.map(item => {
  if(item.key===key){
    item.text=text;
  }
})

this.setState({items: items});
}

  render() {
    return (
      <div className="App">
      <header>
        <form  id="to-do" onSubmit={this.handleSubmit}>
<input type="text" placeholder="Enter list item" onChange={this.handleItem} value={this.state.currentItem.text}/>
<button type="submit">ADD</button>
</form>
</header>
<MyList items={this.state.items} setUpdate={this.setUpdate} deleteItem={this.deleteItem}></MyList>
      </div>
      
    );
  }
}

export default App;
