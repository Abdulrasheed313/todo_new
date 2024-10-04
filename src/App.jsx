import { useRef, useState } from "react";

function App() {
  const input = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = input.current.value; 
   
      setTodo([...todo, newTodo]);
      input.current.value = ""; 
  
  };

   const deleteTodo = (index)=>{
    console.log('todo deleted' , index);
    todo.splice(index , 1);
    setTodo([...todo]);

  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter Text' ref={input} />
        <button type='submit'>Submit</button>
      </form>

      <ol>
        {todo.length > 0 ? (
          todo.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))
        ) : (
          <h1>Not Found</h1>
        )}
      </ol>
    </>
  );
}

export default App;
