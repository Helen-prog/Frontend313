import User from "./User";
import "./Users.css";

              
function Users({items, searchValue, onChangeValue, invites, onClickInvate, onClickSentInvites}){
    return(
        <>
         <div className="search">
            <input type="text" 
                placeholder="Найти пользователя..."
                value={searchValue}
                onChange={onChangeValue}
             />
         </div>
         <ul className="users-list">
            {
                items.filter(obj => {
                    const fullName = (obj.first_name + obj.last_name).toLowerCase();
                    return fullName.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase());
                })
                .map(obj => <User key={obj.id} {...obj}
                    onClickInvate={onClickInvate}
                    isInvited={invites.includes(obj.id)}
                    />)
            }            
         </ul>
         {
            invites.length > 0 && <button className="send-invite-btn" 
            onClick={onClickSentInvites}
            >Отправить приглашения</button>
         }
         
        </>
    )
}

export default Users;