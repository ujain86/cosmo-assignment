import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

function ListItem(props) {

  const handleInput = (e) => {
    var newArr = [...props.arr];
    newArr[props.index] = e.target.value; 
    props.setArr(newArr);
  }

  const handleDelete = () => {
    var arr1 = [...props.arr];
    arr1.splice(props.index,1);
    console.log(arr1);
    props.setArr(arr1);
  }

  return (
    <>
        <ListGroup.Item className='list-item' as="li">
          <input type='text' value={props.item} onChange={handleInput}/>
          <Button variant='danger' onClick={handleDelete}>Delete</Button>
        </ListGroup.Item>
    </>
  )
}

export default ListItem