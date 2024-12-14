import React from "react";
import UserItem from './UserItem.tsx';

import { IUser } from "../types/types.tsx";

interface UserListProps {
    users: IUser[]
}

function UserList({users}: UserListProps){
    return(
        <div>
            {
                users.map(user => 
                    <UserItem key={user.id} user={user} />
                )
            }
        </div>
    )
}

export default UserList;