import { Button, TextField, Container, Paper } from '@mui/material'

import '../css/TodoMain.css'

import { useState } from 'react';

function TodoMain() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleClick = (e) => {
        const task={title, description, dueDate};
        console.log(task);
        fetch("http://localhost:8080/tasks/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(task)
        }).then(() => {
            console.log("New Task added");
        })
        window.location.reload();
    }

    return (
        <div className="container">
            <Container>
                <Paper elevation={3}>
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Add a task" variant="outlined" fullWidth onChange={(e) => setTitle(e.target.value)} />
                        <TextField id="outlined-basic" label="Set description" variant="outlined" fullWidth onChange={(e) => setDescription(e.target.value)} />
                        <TextField id="outlined-basic" type="date" variant="outlined" fullWidth onChange={(e) => setDueDate(e.target.value)} />
                        <Button className="btn" variant="contained" onClick={handleClick}>ADD</Button>
                    </form>
                </Paper>
            </Container>

        </div>
    )
}

export default TodoMain