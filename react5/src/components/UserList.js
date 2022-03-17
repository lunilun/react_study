import React, { useState } from 'react';

const UserList = (props) => {
    return (
        <div>
            {props.users.map(user => {
                return (
                    <div className="card mb-2" key={user.id}>
                        <div className="card-body">
                            {user.name}
                        </div>
                    </div>
                );
            })};
        </div>
    )
};

export default UserList;