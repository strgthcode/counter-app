import React, { useState } from 'react';
import { Button, Row, Col,  } from 'antd';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1);
  }
  
  function reset(){
    setCount(0);
  }


  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"} align={"middle"}>
        <Col className="gutter-row" span={24} justify={"center"} align={"middle"}>
          <h1 className="heading">Counter App</h1>
        </Col>
      </Row>
    
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"} align={"middle"}>
        <Col className="gutter-row" span={24} justify={"center"} align={"middle"}>
          <h1 className="count">{count}</h1>
        </Col>
      </Row>

      
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"} align={"middle"}>
         <Col className="gutter-row" span={4}>
          <Button className="button" onClick={decrease}>-</Button>
        </Col>
        <Col className="gutter-row" span={4}>
          <Button className="button" onClick={increase}>+</Button>
        </Col>
        <Col className="gutter-row" span={4}>
            <Button className="button" onClick={reset}>Reset</Button>

        </Col>
      </Row> 


  
    </>
  );
}

export default App;
