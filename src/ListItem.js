import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

function ListItem(props) {

  const handleInput = (e) => {
    var newArr = [...props.arr];
    newArr[props.index].name = e.target.value; 
    props.setArr(newArr);
  }

  const handleDelete = () => {
    var arr1 = [...props.arr];
    arr1.splice(props.index,1);
    console.log(arr1);
    props.setArr(arr1);
  }

  const handleTypeChange = (e) => {
    var newArr = [...props.arr];
    newArr[props.index].type = e.target.value; 
    props.setArr(newArr);
  }

  const handleAddInObject = () => {
    var newArr = [...props.arr];
    newArr[props.index].subRows.push({name: "addName", type: "String"});
    props.setArr(newArr);
  }

  return (
    <>       
      {props.item.type == "Object"? 
      <>
        <ListGroup.Item className='list-item' as="li">
          <input type='text' value={props.item.name} onChange={handleInput}/>
          <select defaultValue="String" onChange={handleTypeChange}>
            <option>String</option>
            <option>Number</option>
            <option>Boolean</option>
            <option>Object</option>
          </select>
        <Button onClick={handleAddInObject}>+</Button> 
        <Button variant='danger' onClick={handleDelete}>Delete</Button>

        </ListGroup.Item>
        <ListGroup as="ol">
          {props.item.subRows.map((data) => {
            return <ListItem item={data}/>
          })}
        </ListGroup>
      </>
      : 
      <>
        <ListGroup.Item className='list-item' as="li">
          <input type='text' value={props.item.name} onChange={handleInput}/>
          <select defaultValue="String" onChange={handleTypeChange}>
            <option>String</option>
            <option>Number</option>
            <option>Boolean</option>
            <option>Object</option>
          </select>
          <Button variant='danger' onClick={handleDelete}>Delete</Button>
          
        </ListGroup.Item>
      </>} 
    </>
  )
}

export default ListItem;

{/* <ListGroup.Item className='list-item' as="li">
          <input type='text' value={props.item.name} onChange={handleInput}/>
          <select defaultValue="String" onChange={handleTypeChange}>
            <option>String</option>
            <option>Number</option>
            <option>Boolean</option>
            <option>Object</option>
          </select>
          {props.item.type == "Object"? 
          <>
            <Button onClick={handleAddInObject}>+</Button> 
            {props.item.subRows.map((data) => {
              return <ListItem item={data}/>
            })}
          </>
          : ""}
          <Button variant='danger' onClick={handleDelete}>Delete</Button>
      </ListGroup.Item> */}