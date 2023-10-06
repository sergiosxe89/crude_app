import React, { useEffect, useState } from 'react';

const UserList = ({ usersList, selectUser, getForm, warning }) => {
    
    const orderedList = usersList.sort((a, b) => a.first_name.localeCompare(b.first_name));

    return (
        <div className='list__users'>
            <h2>Usuarios</h2>
            <div className='sumary__list'>
                <p><strong>Usuarios Existentes: </strong>{usersList.length}</p>
                <button onClick={() => getForm()}><i className='bx bx-user-plus bx-sm'></i> Nuevo usuario</button>
            </div>
            <div className='container__card'>
            {orderedList.map((user) => (
                <div key={user.id} className="card__user">
                    <h3>{user.first_name}, {user.last_name}</h3>
                    <div className='body__card'>
                        <div className='info__user'>
                            <p><b>E-mail: </b><br />{user.email}</p>
                            <p><b>Fecha de Nacimiento: </b><br />{user.birthday}</p>
                        </div>
                        <div className='user__controler'>
                            <div className='btn__edit' onClick={() => selectUser(user)}><i className='bx bxs-edit-alt bx-sm'></i></div>
                            <div className='btn__warning' onClick={() => warning(user)}><i className='bx bx-trash bx-sm'></i></div>
                        </div>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    );
};

export default UserList;
