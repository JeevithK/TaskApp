import './App.css'
import { Header } from './components/Header'
import { Titlehead } from './components/Titlehead'
import { Todolist } from './components/Todolist'
import { Tabs } from './components/Tabs'
import { Todoinput } from './components/Todoinput'
import { useState,useEffect } from 'react'
import { Footer } from './components/Footer'


function App() {

  const [todos, settodos] = useState([
  ]);

  const [selecttab, setselecttab] = useState("Open");

  function handleaddtodo(newtodo)
  {
    const newtodolist = [...todos, { input: newtodo, complete: false }];
    settodos(newtodolist);
    handlesavedata(newtodolist)
  }
  function handlecompletetodo(index)
  {
    let newtodolist = [...todos]
    let completetodo = todos[index];  

    completetodo['complete'] = true;
    newtodolist[index] = completetodo;
    settodos(newtodolist);
    handlesavedata(newtodolist)
  }
  function handledelete (index)
  {
    let newtododelete = todos.filter((val, valindex) => {
      return valindex!==index
    })

    settodos(newtododelete);
    handlesavedata(newtododelete);
  }

  function handlesavedata(currtodo)
  {
    localStorage.setItem("todo-app", JSON.stringify({ todos : currtodo }))
    
  }

  useEffect(() => {

    if (!localStorage || !localStorage.getItem("todo-app"))
    {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));


    settodos(db.todos);

  },[])


  return (
    <>
      <Titlehead></Titlehead>
      <Header todos={todos} />
      <Todoinput todos={todos} handleaddtodo={handleaddtodo}></Todoinput>
      <Tabs
        todos={todos}
        selecttab={selecttab}
        setselecttab={setselecttab}
      ></Tabs>
      <Todolist
        todos={todos}
        selecttab={selecttab}
        handledelete={handledelete}
        handlecompletetodo={handlecompletetodo}
      ></Todolist>
      <Footer></Footer>
    </>
  );
}

export default App
