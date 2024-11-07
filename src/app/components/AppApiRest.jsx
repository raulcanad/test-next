import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppApi = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error al cargar los elementos:', error));
    }, []);

    const addItem = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', { name: newItem })
            .then(response => {
                setItems([...items, response.data]);
                setNewItem('');  // Limpiar el campo de entrada
            })
            .catch(error => console.error('Error al agregar el elemento:', error));
    };

    return (
        <div>
            <h1>Lista de elementos</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Nuevo elemento"
                data-testid="input-item" // Add a test ID for easy targeting
            />
            <button
                onClick={addItem}
                data-testid="add-button" // Add a test ID for easy targeting
            >
                Agregar elemento
            </button>
        </div>
    );
};

export default AppApi;
