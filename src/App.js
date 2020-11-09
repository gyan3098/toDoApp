import React, { useState , useEffect} from "react";
import "./App.css";
import { Input, Button, Container, Row, Col } from "reactstrap";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([{}]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    // setTodos([...todos, {task: input, createdDate: Date.now()}]);
    db.collection('toDos').add({
      task: input,
      createdDate: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
    console.log(todos)
  };

  useEffect(() => {
    db.collection('toDos').orderBy('createdDate','desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc))
      setTodos(snapshot.docs.map(doc => doc.data()))
      // console.log(todos)
    })
    
  }, [])

  
  const inputHandler = (event) => {
    setInput(event.target.value);
    // console.log(value.text)
  };

  const deleteHandler = (toDo) => {
    
    setTodos(todos.filter((todo) => todo !== toDo))
  };
  return (
    <div>
      <header className="center">
        <h1>ToDo App🕑</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <Input
              type="text"
              onChange={inputHandler}
              name="todoItem"
              value={input}
              required
              placeholder="☑ Write to-do item "
            />
          </Col>
          <Col>
            <Button
              type="button"
              disabled={!input}
              onClick={addTodo}
              color="primary"
            >
              Add todo
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        {todos.map((todo) => (
          <Todo todo={todo} deleteHandler={deleteHandler} key={todo.createdDate} />
        ))}
      </Container>
    </div>
  );
}

export default App;
