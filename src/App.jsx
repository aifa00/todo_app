import './App.css';
import { useRef, useState } from 'react';
import TextInput from './components/TextInput';
import ToDos from './components/ToDos';


function App() {
  
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState ('');
  const [editTodo, setEditTodo] = useState ();
  const todoRef = useRef();

  
  

    return (
      <div className="app">

        <div className="mainHeading">  
          <h1>Get Things Done!</h1>
        </div>

        <div className="subHeading">
          <br />
          <h2>Whoop!&nbsp;&nbsp;it's {new Date ().toLocaleString('en', {weekday: 'long'})} 😊 </h2>                  
        </div>        

        <div className="input">
          <TextInput 
          toDo = {toDo} 
          setTodo = {setTodo} 
          toDos = {toDos} 
          setTodos = {setTodos} 
          ref = {todoRef}
          />
        </div>

        {          
          toDos.map((obj) =>   
            <ToDos 
            key = {obj.id} 
            {...obj}
            toDo = {toDo} 
            setTodo = {setTodo} 
            toDos = {toDos} 
            setTodos = {setTodos} 
            ref = {todoRef}
            editTodo = {editTodo} 
            setEditTodo = {setEditTodo}
            />
          )
        }

      </div>
    );
  
}



export default App;
