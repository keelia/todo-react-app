import React, { useState ,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoAsync, selectTodoStatusList,selectTodoCategoryList} from '../todos.reducer';
import './add-todo.scss';
import { Modal,Button,Form } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';

export function AddTodoModal(props) {
  const todoCategoryList = useSelector(selectTodoCategoryList);
  const todoStatusList =  useSelector(selectTodoStatusList);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id:null,
    category:'work',
    status:'todo',
    desciprion:'',
    datetime:props.tododate,
  });
  useEffect(() => {
    setTodo(t=>({...t,datetime:props.tododate}))
  },[props]);

  function onDateTimeChange(dateTime){
    if(dateTime){
      setTodo({...todo,datetime:dateTime.getTime()})
    }else{
      setTodo({...todo,datetime:props.tododate})
    }
  }

  function onSubmit(e){
    dispatch(addTodoAsync(todo))
    setTodo({
      id:null,
      category:'work',
      status:'todo',
      desciprion:'',
      datetime:props.tododate,
    })
    props.onHide()
  }

  function onSelectTodoCategory(e){
    const category = e.target.value
    setTodo({...todo,category})
  }

  function onSelectTodoStatus(e){
    const status = e.target.value
    setTodo({...todo,status})
  }

  function onSelectTodoDescription(e){
    const desciprion = e.target.value
    setTodo({...todo,desciprion})
  }

  return (
    <Modal  {...props}  size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="addTodoForm.ControlInput1">
            <Form.Label>Due Date</Form.Label>
            <DateTimePicker onChange={onDateTimeChange} value={new Date(todo.datetime)} />
          </Form.Group>
          <Form.Group controlId="addTodoForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" onChange={onSelectTodoCategory} value={todo.category}>
             {todoCategoryList.map(cat=>(<option key={cat.categoryId}>{cat.category}</option>))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="addTodoForm.ControlSelect2">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" onChange={onSelectTodoStatus} value={todo.status}>
                {todoStatusList.map(status=>(<option key={status.statusId}>{status.status}</option>))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="addTodoForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3}  onChange={onSelectTodoDescription} value={todo.desciprion}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
        <Button type="submit" onClick={onSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
