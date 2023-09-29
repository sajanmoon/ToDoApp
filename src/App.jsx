import { useState } from 'react'
import './App.css'
import ListElem from './ListElem';

function App() {
  const [itemVal, setItemVal] = useState("");
  const [getVal, setGetVal] = useState([])

  function showInputItem(e) {
    setItemVal(e.target.value)

  }

  function getInputItem() {
    setGetVal((preVal) => {
      return [...preVal, itemVal]
    })
    setItemVal("")

  };

  function deleteItems(id) {
    setGetVal((preVal)=>{
      return preVal.filter((_arrElem,index)=>{
        return index!== id;
      })
    })
  }


  return (
    <>
      <div className="main-container">
        <div className="center-div">
          <h1>ToDo List</h1>
          <input type="text" placeholder='Add a item' value={itemVal} onChange={showInputItem} />
          <button onClick={getInputItem}>+</button>
          <ol>

            {getVal.map((values, index) => {
              return <ListElem key={index} id={index} text={values}
                onSelect={deleteItems} />;
            })}

          </ol>
        </div>


      </div>
    </>
  )
}

export default App
