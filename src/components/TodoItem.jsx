import { Button } from "@mui/material"

function TodoItem({ title, description, due_date, id }) {
    const handleClick = (e) => {
        const task={title, description, due_date, id};
        console.log(task);
        fetch(`http://localhost:8080/tasks/delete/${task.id}`, {
            method:"DELETE"
        }).then(() => {
            console.log("Task deleted");
        })
        window.location.reload();
    }
    
    return (
        <div>
            <h2>Todo Items Component {title} {description} {due_date}</h2>
            <Button variant="contained" onClick={handleClick}>DELETE</Button>
        </div>
    )
}

export default TodoItem