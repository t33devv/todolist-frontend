import '../css/TodoItems.css'

import { Container, Paper } from '@mui/material';

import TodoItem from './TodoItem.jsx';

import { useState, useEffect } from 'react';

function TodoItems() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/tasks/getAll');
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once on mount

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container">
            <Container>
                <Paper className="paper" elevation={3}>
                    <h1 className="title">Todo items:</h1>
                    <ul className="list">
                        {data.map(item => (
                            <TodoItem key={item.id} title={item.title} description={item.description} due_date={item.due_date} id={item.id} />
                        ))}
                    </ul>
                </Paper>
            </Container>
        </div>
    )
}

export default TodoItems;