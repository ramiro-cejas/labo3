import React, { useState, useEffect } from 'react';
import Item from './Item';

var urlToFetch = "https://6602f3169d7276a75554ac7b.mockapi.io/apiIAW/users"

function Contenedor() {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch(urlToFetch)
            .then(response => response.json())
            .then(data => {
                setUsersList(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="ListadoDeUsuarios">
            <h1>Lista de usuarios</h1>
            <div className="lista">
                {usersList.map(user => (
                    <Item key={user.id} name={user.name} email={user.email} avatar={user.avatar} />
                ))}
            </div>
        </div>
    );
}

export default Contenedor;
