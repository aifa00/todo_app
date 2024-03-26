import '../App.css'
import { forwardRef } from 'react';

function ToDos(props, ref) {

    const {toDos, setTodos, editTodo, setEditTodo, ...obj} = props;


    const handleCheckInput = (e) => {
        setTodos(
            toDos.map ((todo) => {
              if (obj.id === todo.id) {
                todo.completed = e.target.checked;
              }
              return todo;
            })
        )
    }

    const handleTextInput = (e) => setEditTodo ({id: editTodo.id, text: e.target.value, completed:editTodo.completed });

    const handleEdit = (e) => setEditTodo(obj);

    const updateTodo = () => {
        setTodos(toDos.map((todo) => todo.id === editTodo.id ? editTodo : todo ));
        setEditTodo(null);
    }

    const cancelEdit = (e) => setEditTodo(null);

    const deleteTodo = (e) => {
        setTodos(toDos.filter((todo) => (todo.id !== obj.id)));
        ref.current.focus ();
    }

    

    return (

    <div className="todos">

    <div className="todo">

      <div className="left">

        <input type="checkbox" checked = {obj.completed} onChange={handleCheckInput}/>
        {
          (editTodo && editTodo.id === obj.id) ? (
            <input type="text" value={editTodo.text} onChange={handleTextInput}/>                                                      
          ) : (
            <p>{obj.text}</p>
          )
        }

      </div>

      <div className="right">     

        {
          (editTodo && editTodo.id === obj.id) ? (
            <i id='checkIcon' className="fas fa-check" onClick={updateTodo}></i>
          ) : (
            <i id='editIcon' className="fas fa-edit" onClick={handleEdit}></i>       
          )
        }

        {
          (editTodo && editTodo.id === obj.id) ? (
            <i id='crossIcon' className="fas fa-times" onClick={cancelEdit}></i>
          ) : (
            <i className="fa-solid fa-trash" onClick={deleteTodo}></i>            
          )
        }
        
      </div>
      
    </div>
  </div>
  )
}

export default forwardRef(ToDos);