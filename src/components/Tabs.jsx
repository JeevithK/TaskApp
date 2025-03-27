
export function Tabs(props) {
  const tabs = ["All", "Open", "Completed"];

  const { todos, setselecttab, selecttab } = props;

  return (
    <>
      <nav className="tab-container">
        {tabs.map((tab, tabindex) => {
          let numoftasks = 0;
          if (tab === "All") numoftasks = todos.length;
          else if (tab === "Open")
            numoftasks = todos.filter((val) => !val.complete).length;
          else numoftasks = todos.filter((val) => val.complete).length;
 
            return (
                <button
                    key={tabindex}
                    className={
                        "tab-button " + (tab === selecttab ? "tab-selected" : "")
                    } onClick={() => {
                        setselecttab(tab)
                    }
                    }
            >
              <h4>
                {tab} <span>{numoftasks}</span>
              </h4>
            </button>
          );
        })}
        <hr />
      </nav>
    </>
  );
}
