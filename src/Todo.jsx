import React, { useState } from "react";
import {Input, Button, Row, Col } from "reactstrap";

function Todo(props) {

    // console.log(props.todo.createdDate)
    // console.log(props.todo.task)
    const [strike, toggleStrike] = useState(false);

    const strikeToggler =() => {
        toggleStrike(!strike);
    }

  return (
    <div className="md-12 ">
      <Row className="m-1 border-black">
          <Col md="1" className="m--1"><Input type="checkbox" onChange={strikeToggler} className="lg" /> </Col>
        <Col >{strike? <strike>${props.todo.task}</strike>:props.todo.task} </Col>
        <Col>{Date(props.todo.createdDate).toString().substr(4, 11)}</Col>
        <Col>
          <Button
            onClick={() => props.deleteHandler(props.todo.task)}
            color="danger"
          >
            <span className="fa fa-trash lg mr-1" />
            Delete
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Todo;
