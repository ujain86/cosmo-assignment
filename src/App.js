import React, { useEffect, useState } from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import ListItem from './ListItem';

const App = () => {

  var arr1 = [];

  const [arr, setArr] = useState([]);

  const handleAdd = () => {
    
    arr1 = [...arr];

    // if(arr1.length > 0){
    //   var num = arr1[arr1.length-1];
    //   arr1.push(num+1);
    // }
    // else{
    //   arr1.push(1);
    // }
    arr1.push("addName");
    
    console.log("Arr", arr1);
    setArr(arr1);

  }

  return(
    <>
      <div>
        <ListGroup>
          <ListGroup.Item className='heading'>
            <span>Field name and type</span>
            <Button onClick={handleAdd}>+</Button>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <ListGroup as="ol" numbered>
        {arr.map((item, index) => {
          return <ListItem key={index} index={index} item={item} arr={arr} setArr={setArr} />
        })}
      </ListGroup>
    </>
  )
}

export default App;
