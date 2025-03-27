export function Header(props)
{

    const { todos } = props;
    const todoslength = todos.length;

    const tasksplural = todos.length > 1
    
    const taskortasks = (tasksplural ? "tasks" : "task");

    return (
        <>
            <header><h1 className="text-gradient">You Have { todoslength} open {taskortasks}</h1></header>
        </>
    )
}