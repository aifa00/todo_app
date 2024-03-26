import { forwardRef } from 'react';
import '../App.css';

function TextInput(props, ref) {

    const {toDo, setTodo, toDos, setTodos} = props;


    const handleOnchange = (e) => setTodo(e.target.value);

    const handleOnclick = (e) => {
        if (toDo.trim() === '') {
            ref.current.focus();
        } else {
            setTodos([{id: Date.now(), text: toDo, completed: false}, ...toDos]);
            setTodo('');
            ref.current.focus();
        }
    }


  return (
    <div>

        <input 
        type="text" 
        id='addItemInput' 
        value={toDo} 
        onChange={handleOnchange} 
        placeholder="🖊️Add item..." 
        ref={ref}
        />
        
        <i className="fas fa-plus" onClick={handleOnclick}></i>

    </div>
  )
}

export default forwardRef(TextInput);