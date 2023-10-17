function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }

  return (
  <div className="todo" > 
    <label>{todo.text}</label>
    <input type ="checkbox" onClick={handle} value={todo.text}/>
  </div>
  );
}
