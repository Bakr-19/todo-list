import { useState } from "react"

const EditTodoForm =  ({editTodo, task} ) => {

  const [value,setValue] = useState(task.task)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(value, task.id)
    setValue("")
  }
  return(
    <div>
      <form className="TodoFrom" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" value={value}
        placeholder="Update Task" 
        onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className="todo-btn">Update Task </button> 
      </form>
    </div>
  )
}


export default EditTodoForm