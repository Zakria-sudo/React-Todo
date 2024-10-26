import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [val, setVal] = useState("");
  const [list, setlist] = useState([]);
  

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const addList = () => {
    if (val.trim()) { // Ensuring the input is not empty
      setlist([...list, val]);
      setVal("");
      console.log(list)
    }
  };

  const handleDelete=(index)=>{
    alert("Are you sure, you want to delete this todo?")
    let newList = [...list];
    newList.splice(index,1);
    setlist([...newList]);
  }
 
  return (
    <>
      <div className="container flex justify-center h-[100vh] ">
        <div className="card min-h-[100vh] w-[60vw] bg-[rgb(95,105,135)]">
          <div className="heading text-center my-6">
            <h1 className="text-4xl underline font-bold ">Todo App</h1>
          </div>
          <div className="inp-btn flex justify-center my-10">
            <input
              onChange={handleChange}
              value={val}
              type="text"
              placeholder="Add a Todo"
              className="w-[400px] h-13 outline-none rounded-xl bg-slate-600 p-4 text-white"
            />
            <button
              onClick={addList}
              className="bg-blue-500 p-3 rounded-full w-20 mx-4 text-[20px] border-2 border-gray-500"
            >
              +
            </button>
            
          </div>
          <div className="heading text-center ">
            <h1 className="font-mono text-xl font-bold bg-gray-600">Your Todos</h1>
          </div>
          <div className="displayList flex flex-col justify-center items-center">
            {list.map((item, index) => (
              <div key={index} className="parent items-center w-[55%] flex justify-between my-5">
                <input type="checkbox"className="rounded-full" />
                <div className="text-white">{item}</div>
                <button
                   onClick={() => handleDelete(index)}
                  className="bg-red-500 px-2 rounded text-white"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
