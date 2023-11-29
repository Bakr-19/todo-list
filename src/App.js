import TodoWrapper from './Compoents/TodoWrapper';
import Todo from './Compoents/Todo';
function App() {

 

 

 
  return (<div className='App'>
    <TodoWrapper/>
      

  </div>
  )
}

export default App;



// let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]

// const[staff, setStaff] = useState([])
// const [error, setError] = useState(null)

// useEffect( () => {

//   const fetchStaff = async () => {

//     try{
//       const url = 'https://jsonplaceholder.typicode.com/todos/1'
//       const response = await fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))
      

//     if (!response.ok) {
//       throw new Error(response.statusText)
//     }
//     const data = await response.json()
//     setStaff(data)
//   } catch (err) {
//     setError('could not fetch data')
//     console.log(err.message)
//   }




// }
// fetchStaff()
// },{})