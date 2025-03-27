export function Todocard(props) {
  const { todos,handledelete,todoindex ,handlecompletetodo} = props;
    

  return (
    <>
      <div className="card todo-item">
        <p>{todos.input}</p>
        <div className="todo-buttons">
                  <button disabled={todos.complete} onClick={() =>
                      {handlecompletetodo(todoindex);}
          }>
            <h6>Done</h6>
          </button>
                  <button onClick={() => {
                      handledelete(todoindex)
          }}>
            <h6>Delete</h6>
          </button>
        </div>
      </div>
    </>
  );
}
 