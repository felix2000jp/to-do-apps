import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import {useState, useRef} from "react"

const App = () => {
  const inputName = useRef();
  const [tasks, setTasks] = useState([]);
  
  // Button Handlers
  const finishedButton = (event) => {
    console.log(event.target.value)
    const newTasks = tasks.map(task => task.id === event.target.value ? {...task, status: !task.status} : task)
    setTasks(newTasks)
  }

  const deleteButton = (event) => {
    event.preventDefault();
    const newTasks = tasks.filter(task => task.id !== event.target.value)
    setTasks(newTasks)
  }

  const addButton = (event) => {
    event.preventDefault();
    if (inputName.current.value === "") {
      console.log("please write a name for yourt task");
    }
    else {
      const task = {name: inputName.current.value, status: false, id: new Date().getTime().toString()};
      setTasks([...tasks, task]);
    }
  }


  return (
    <>
    <Container className="mt-5">
      <h1 className="mt-5">ToDo App</h1>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th><h3>Name</h3></th>
            <th><h3>Status</h3></th>
            <th><h3>Edit</h3></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td><h5>{task.name}</h5></td>
              <td>
                {
                task.status ? (<h5 className="text-success">Finished</h5>) 
                            : (<h5 className="text-danger">Not Finished</h5>)
                }
              </td>
              <td className="d-flex gap-2">
                {
                !task.status ? (<Button variant="success" value={task.id} onClick={finishedButton}>Finished</Button>) 
                             : (<Button variant="danger" value={task.id} onClick={finishedButton}>Not Finished</Button>)
                }
                <Button variant="secondary" value={task.id} onClick={deleteButton}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="mt-5 text-center">
        <Form className="d-flex gap-2 justify-content-center">
          <Form.Control className="w-50" 
                        placeholder="Name" 
                        type="text"
                        ref={inputName}
          />
          <Button variant="dark" type="submit" onClick={addButton}>Add</Button>
        </Form>
      </div>
    </Container>
    </>
  );
}

export default App;
