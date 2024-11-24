import { useEffect, useState } from 'react';
import Users from './components/users/Users';
import Success from './components/success/Success';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => setUsers(json.data))
      .catch(err => {
        console.log(err);
        alert("Ошибка при получении пользователей")
      })
  }, []);

  const onChangeValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvate = (id) => {
    if(invites.includes(id)){
      setInvites(prev => prev.filter(ch => ch !== id))
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  const onClickSentInvites = () => {
    setSuccess(true);
  }

  return (
    <div className="main">
      {
        success ? <Success count={invites.length} /> : <Users
        items={users}
        searchValue={searchValue}
        onChangeValue={onChangeValue}
        invites={invites}
        onClickInvate={onClickInvate}
        onClickSentInvites={onClickSentInvites}
      />
      }
      
    </div>
  );
}

export default App;
