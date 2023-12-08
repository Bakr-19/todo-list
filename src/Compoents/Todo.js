


const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {

  return(
    <div  className="Todo">
       <p onClick={() => toggleComplete(task.id)}
        className={`${task.toggleComplete ? 'completed' : ''}`}
        >{task.task}</p>
       <div>
          <button><span onClick={() => editTodo(task.id)}>.</span></button>
          <button className=""><span onClick={() => deleteTodo(task.id)}>.</span></button>
       </div>
    </div>
  )
}


export default Todo