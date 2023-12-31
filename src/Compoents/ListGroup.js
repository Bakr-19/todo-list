import { useState } from "react"




function ListGroup({items, heading, }) {
 

  const  [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
          className={selectedIndex === index ? 'list-group-item active': 'list-group-item'}
          onClick={() => { 
            setSelectedIndex(index)
          
          }} 
          key={item}>
          {item}
          
          </li>
        ))}

      </ul>
    </>
  )

}

export default ListGroup