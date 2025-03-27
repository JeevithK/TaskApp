import { useState } from "react";

export function Todoinput(props) {
  const { handleaddtodo } = props;

  const [inp, setinp] = useState("");

  const thetask = (e) => {
    setinp(e.target.value);
  };

  return ( 
    <div className="input-container">
      <input
        type="text"
        placeholder="Add Task"
        onChange={thetask}
        value={inp}
      />
      <button
        onClick={() => {
          if (!inp) {
            return;
          }
          handleaddtodo(inp);
          setinp("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
