import React from 'react'



function ListElem(props) {
  return (
    <div>
        <div className='todo_style'>
        <i className="fa-solid fa-trash" 
        onClick={()=>{
          props.onSelect(props.id)
        }}></i>
        <li>{props.text}</li>
        </div>
    </div>
  )
}

export default ListElem
