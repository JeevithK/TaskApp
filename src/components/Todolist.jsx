import { Todocard } from "./Todocard";

export function Todolist(props) {
    const { todos, selecttab,handledelete,handlecompletetodo } = props;


    let filtertodo=[];
    if (selecttab === "All") {
        filtertodo = todos;
    } else if (selecttab === "Completed") {
        filtertodo = todos.filter(val =>
            val.complete);
    }
    else {
        filtertodo = todos.filter(val =>
            !val.complete
        );
    }
        console.log("This is " + selecttab);
        console.log(filtertodo);

        return (
            <>
                {filtertodo.map((todo, todoindex) => {

                    console.log(todo.input);
                    return <Todocard key={todoindex} todoindex={todoindex} todos={todo} handledelete={handledelete} handlecompletetodo={ handlecompletetodo} />;
                })}
                {/* <Todocard todos={todos}></Todocard> */}
            </>
        );
    
}
